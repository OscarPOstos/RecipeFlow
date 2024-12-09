import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateListDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID del plan de comidas', example: 'example-meal-plan-id' })
  mealPlanId: string;
}