import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateInventoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Ingrediente a actualizar', example: 'Tomates' })
  ingredient: string;

  @IsBoolean()
  @ApiProperty({ description: 'Indica si el ingrediente está en inventario', example: true })
  inInventory: boolean;
}