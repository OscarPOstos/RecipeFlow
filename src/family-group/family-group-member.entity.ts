// family-group-member.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { FamilyGroup } from './family-group.entity';

@Entity()
export class FamilyGroupMember {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FamilyGroup, (group) => group.members)
  group: FamilyGroup;

  @Column()
  email: string;

  @Column({ default: false })
  isAccepted: boolean;
}