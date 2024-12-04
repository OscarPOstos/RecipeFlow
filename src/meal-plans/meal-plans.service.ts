import { Injectable, NotFoundException } from '@nestjs/common';
import { GenerateMealPlanDto } from './dto/generate-meal-plan.dto';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';

@Injectable()
export class MealPlansService {
  private mealPlans = []; // Temporal, sustituir con conexión a base de datos

  findAll() {
    return this.mealPlans;
  }

  generate(generateMealPlanDto: GenerateMealPlanDto) {
    const newPlan = {
      id: Date.now().toString(),
      ...generateMealPlanDto,
      createdAt: new Date(),
    };
    this.mealPlans.push(newPlan);
    return newPlan;
  }

  create(createMealPlanDto: CreateMealPlanDto) {
    const newPlan = {
      id: Date.now().toString(),
      ...createMealPlanDto,
      createdAt: new Date(),
    };
    this.mealPlans.push(newPlan);
    return newPlan;
  }

  update(id: string, updateMealPlanDto: UpdateMealPlanDto) {
    const index = this.mealPlans.findIndex((plan) => plan.id === id);
    if (index === -1) {
      throw new NotFoundException(`Plan with ID ${id} not found`);
    }
    this.mealPlans[index] = { ...this.mealPlans[index], ...updateMealPlanDto };
    return this.mealPlans[index];
  }

  remove(id: string) {
    const index = this.mealPlans.findIndex((plan) => plan.id === id);
    if (index === -1) {
      throw new NotFoundException(`Plan with ID ${id} not found`);
    }
    this.mealPlans.splice(index, 1);
    return;
  }
}