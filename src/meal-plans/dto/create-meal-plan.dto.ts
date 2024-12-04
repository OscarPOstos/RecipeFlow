import { IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMealPlanDto {
  @ApiProperty({ description: 'Nombre del plan de comidas', example: 'Plan semanal' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Lista de recetas incluidas en el plan',
    example: ['receta1Id', 'receta2Id'],
  })
  @IsArray()
  recipeIds: string[];
}