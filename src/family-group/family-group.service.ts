import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamilyGroup } from './family-group.entity';
import { FamilyGroupMember } from './family-group-member.entity';
import { CreateFamilyGroupDto } from './dto/create-family-group.dto';
import { InviteMemberDto } from './dto/invite-member.dto';

@Injectable()
export class FamilyGroupService {
  constructor(
    @InjectRepository(FamilyGroup)
    private readonly familyGroupRepository: Repository<FamilyGroup>,
    @InjectRepository(FamilyGroupMember)
    private readonly familyGroupMemberRepository: Repository<FamilyGroupMember>,
  ) {}

  // Crear un grupo familiar
  async createFamilyGroup(dto: CreateFamilyGroupDto): Promise<FamilyGroup> {
    const group = this.familyGroupRepository.create({ name: dto.name });
    if (dto.emails && dto.emails.length > 0) {
      group.members = dto.emails.map((email) => this.familyGroupMemberRepository.create({ email }));
    }
    return this.familyGroupRepository.save(group);
  }

  // Invitar a un miembro al grupo
  async inviteMember(groupId: number, dto: InviteMemberDto): Promise<FamilyGroupMember> {
    const group = await this.familyGroupRepository.findOne({ where: { id: groupId } });
    if (!group) {
      throw new Error('Grupo familiar no encontrado');
    }
    const member = this.familyGroupMemberRepository.create({
      group,
      email: dto.email,
    });
    return this.familyGroupMemberRepository.save(member);
  }

  // Ver miembros del grupo
  async getGroupMembers(groupId: number): Promise<FamilyGroupMember[]> {
    const group = await this.familyGroupRepository.findOne({
      where: { id: groupId },
      relations: ['members'],
    });
    if (!group) {
      throw new Error('Grupo familiar no encontrado');
    }
    return group.members;
  }
}