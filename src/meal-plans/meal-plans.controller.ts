import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    UseGuards,
  } from '@nestjs/common';
  import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { MealPlansService } from './meal-plans.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GenerateMealPlanDto } from './dto/generate-meal-plan.dto';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';
  
  @ApiTags('meal-plans') // Agrupa los endpoints bajo "meal-plans" en Swagger
  @ApiBearerAuth() // Requiere autenticación JWT
  @Controller('meal-plans')
  @UseGuards(JwtAuthGuard)
  export class MealPlansController {
    constructor(private readonly mealPlansService: MealPlansService) {}
  
    @Get('/')
    @ApiOperation({ summary: 'Ver los planes de comida existentes' })
    @ApiResponse({ status: 200, description: 'Planes de comida obtenidos con éxito.' })
    findAll() {
      return this.mealPlansService.findAll();
    }
  
    @Post('/generate')
    @ApiOperation({ summary: 'Generar un plan de comidas basado en preferencias' })
    @ApiResponse({ status: 201, description: 'Plan de comidas generado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    generate(@Body() generateMealPlanDto: GenerateMealPlanDto) {
      return this.mealPlansService.generate(generateMealPlanDto);
    }
  
    @Post('/')
    @ApiOperation({ summary: 'Crear un plan de comidas personalizado' })
    @ApiResponse({ status: 201, description: 'Plan de comidas creado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    create(@Body() createMealPlanDto: CreateMealPlanDto) {
      return this.mealPlansService.create(createMealPlanDto);
    }
  
    @Put('/:id')
    @ApiOperation({ summary: 'Actualizar un plan de comidas existente' })
    @ApiResponse({ status: 200, description: 'Plan de comidas actualizado con éxito.' })
    @ApiResponse({ status: 404, description: 'Plan de comidas no encontrado.' })
    update(@Param('id') id: string, @Body() updateMealPlanDto: UpdateMealPlanDto) {
      return this.mealPlansService.update(id, updateMealPlanDto);
    }
  
    @Delete('/:id')
    @ApiOperation({ summary: 'Eliminar un plan de comidas' })
    @ApiResponse({ status: 204, description: 'Plan de comidas eliminado con éxito.' })
    @ApiResponse({ status: 404, description: 'Plan de comidas no encontrado.' })
    remove(@Param('id') id: string) {
      return this.mealPlansService.remove(id);
    }
  }