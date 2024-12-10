import { ApiProperty } from '@nestjs/swagger';

export class UpdatePreferencesDto {
  @ApiProperty({ description: 'Preferencias dietéticas (por ejemplo, vegano, sin gluten)', example: ['vegano'] })
  dietaryPreferences: string[];

  @ApiProperty({ description: 'Restricciones alimenticias (por ejemplo, alergias a frutos secos)', example: ['frutos secos'] })
  dietaryRestrictions: string[];

  @ApiProperty({ description: 'Ingredientes prioritarios', example: ['tomates', 'pollo'] })
  preferredIngredients: string[];

  @ApiProperty({ description: 'Ingredientes a excluir', example: ['berenjenas'] })
  excludedIngredients: string[];
}