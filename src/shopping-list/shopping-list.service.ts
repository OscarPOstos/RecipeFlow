import { Injectable, NotFoundException } from '@nestjs/common';
import { GenerateListDto } from './dto/generate-list.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class ShoppingListService {
  private shoppingList = [];

  async getShoppingList() {
    return this.shoppingList;
  }

  async generateShoppingList(generateListDto: GenerateListDto) {
    // Generar lista basada en el plan de comidas
    const { mealPlanId } = generateListDto;
    // Simulación: obtener ingredientes de un plan (se debería implementar la lógica real)
    this.shoppingList = [
      { ingredient: 'Tomates', quantity: 3, inInventory: false },
      { ingredient: 'Cebollas', quantity: 2, inInventory: true },
    ];
    return this.shoppingList;
  }

  async updateInventory(updateInventoryDto: UpdateInventoryDto) {
    const { ingredient, inInventory } = updateInventoryDto;
    const item = this.shoppingList.find((i) => i.ingredient === ingredient);
    if (!item) throw new NotFoundException(`Ingredient ${ingredient} not found`);
    item.inInventory = inInventory;
    return item;
  }

  async exportShoppingList(format: string) {
    if (format === 'pdf') {
      // Simulación: generar archivo PDF
      return {
        mimeType: 'application/pdf',
        filename: 'shopping-list.pdf',
        buffer: Buffer.from('PDF content goes here'),
      };
    } else if (format === 'email') {
      // Simulación: enviar por correo
      return { message: 'Shopping list sent via email' };
    } else {
      throw new NotFoundException(`Unsupported export format: ${format}`);
    }
  }
}
