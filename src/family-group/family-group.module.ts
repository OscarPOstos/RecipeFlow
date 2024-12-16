import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyGroup } from './family-group.entity';
import { FamilyGroupMember } from './family-group-member.entity';
import { FamilyGroupService } from './family-group.service';
import { FamilyGroupController } from './family-group.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyGroup, FamilyGroupMember])],
  controllers: [FamilyGroupController],
  providers: [FamilyGroupService],
})
export class FamilyGroupModule {}