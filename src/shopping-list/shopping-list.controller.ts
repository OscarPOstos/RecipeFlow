import { Controller, Get, Post, Put, Body, Query, Res } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { Response } from 'express';
import { GenerateListDto } from './dto/generate-list.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Shopping List')
@ApiBearerAuth()
@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Get('/')
  @ApiOperation({ summary: 'Obtener la lista de compras generada' })
  @ApiResponse({ status: 200, description: 'Lista de compras obtenida exitosamente.' })
  async getShoppingList() {
    return this.shoppingListService.getShoppingList();
  }

  @Post('/generate')
  @ApiOperation({ summary: 'Generar una lista de compras basada en un plan de comidas' })
  @ApiResponse({ status: 201, description: 'Lista de compras generada correctamente.' })
  async generateShoppingList(@Body() generateListDto: GenerateListDto) {
    return this.shoppingListService.generateShoppingList(generateListDto);
  }

  @Put('/update')
  @ApiOperation({ summary: 'Marcar ingredientes como "en inventario"' })
  @ApiResponse({ status: 200, description: 'Ingrediente actualizado correctamente.' })
  async updateInventory(@Body() updateInventoryDto: UpdateInventoryDto) {
    return this.shoppingListService.updateInventory(updateInventoryDto);
  }

  @Get('/export')
  @ApiOperation({ summary: 'Exportar la lista de compras' })
  @ApiResponse({ status: 200, description: 'Exportación realizada exitosamente.' })
  async exportShoppingList(@Query('format') format: string, @Res() res: Response) {
    const file = await this.shoppingListService.exportShoppingList(format);
    res.setHeader('Content-Type', file.mimeType);
    res.setHeader('Content-Disposition', `attachment; filename=${file.filename}`);
    res.send(file.buffer);
  }
}
