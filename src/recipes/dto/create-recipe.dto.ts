import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({ description: 'Título de la receta', example: 'Tacos Veganos' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descripción de la receta',
    example: 'Deliciosos tacos veganos con aguacate y frijoles negros.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Ingredientes de la receta',
    example: ['tortillas', 'aguacate', 'frijoles negros', 'limón'],
    required: false,
  })
  @IsArray()
  @IsOptional()
  ingredients?: string[];

  @ApiProperty({
    description: 'Categoría de la receta (desayuno, almuerzo, etc.)',
    example: 'Cena',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Etiquetas de la receta (vegano, rápido, etc.)',
    example: ['vegano', 'rápido'],
    required: false,
  })
  @IsArray()
  @IsOptional()
  tags?: string[];
}