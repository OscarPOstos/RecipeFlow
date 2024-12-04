import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GenerateMealPlanDto {
  @ApiProperty({ description: 'Preferencia alimentaria', example: 'vegano' })
  @IsString()
  @IsOptional()
  dietaryPreference?: string;

  @ApiProperty({
    description: 'Restricciones alimenticias',
    example: ['sin gluten', 'sin lactosa'],
  })
  @IsArray()
  @IsOptional()
  restrictions?: string[];

  @ApiProperty({
    description: 'Ingredientes disponibles',
    example: ['tomate', 'aguacate'],
  })
  @IsArray()
  @IsOptional()
  availableIngredients?: string[];
}