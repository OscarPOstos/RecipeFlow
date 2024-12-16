import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class InviteMemberDto {
  @ApiProperty({ description: 'Correo electrónico del usuario a invitar', example: 'user@example.com' })
  @IsEmail()
  email: string;
}