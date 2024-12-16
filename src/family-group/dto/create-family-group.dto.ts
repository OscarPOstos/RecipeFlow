import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray } from 'class-validator';

export class CreateFamilyGroupDto {
  @ApiProperty({ description: 'Nombre del grupo familiar', example: 'Mi Familia' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Lista de correos de los miembros iniciales',
    example: ['user1@example.com', 'user2@example.com'],
    required: false,
  })
  @IsArray()
  emails?: string[];
}