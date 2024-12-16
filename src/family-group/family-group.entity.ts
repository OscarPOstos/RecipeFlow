// family-group.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FamilyGroupMember } from './family-group-member.entity';

@Entity()
export class FamilyGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => FamilyGroupMember, (member) => member.group, { cascade: true })
  members: FamilyGroupMember[];
}