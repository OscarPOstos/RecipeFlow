import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  private recipes = []; // Simulación de almacenamiento temporal

  findAll() {
    return this.recipes;
  }

  findOne(id: string) {
    const recipe = this.recipes.find((r) => r.id === id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return recipe;
  }

  create(createRecipeDto: CreateRecipeDto) {
    const newRecipe = {
      id: Date.now().toString(),
      ...createRecipeDto,
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    const index = this.recipes.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    this.recipes[index] = { ...this.recipes[index], ...updateRecipeDto };
    return this.recipes[index];
  }

  remove(id: string) {
    const index = this.recipes.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return this.recipes.splice(index, 1);
  }
}