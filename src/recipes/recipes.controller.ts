import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('recipes') // Agrupa los endpoints bajo la etiqueta "recipes" en Swagger
@ApiBearerAuth() // Indica que este módulo usa autenticación Bearer
@Controller('recipes')
@UseGuards(JwtAuthGuard)
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('/')
  @ApiOperation({ summary: 'Listar todas las recetas del usuario' })
  @ApiResponse({ status: 200, description: 'Lista de recetas obtenida con éxito.' })
  findAll() {
    return this.recipesService.findAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtener los detalles de una receta específica' })
  @ApiResponse({ status: 200, description: 'Detalles de la receta obtenidos con éxito.' })
  @ApiResponse({ status: 404, description: 'Receta no encontrada.' })
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Crear una nueva receta' })
  @ApiResponse({ status: 201, description: 'Receta creada con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Actualizar una receta existente' })
  @ApiResponse({ status: 200, description: 'Receta actualizada con éxito.' })
  @ApiResponse({ status: 404, description: 'Receta no encontrada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(id, updateRecipeDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Eliminar una receta' })
  @ApiResponse({ status: 204, description: 'Receta eliminada con éxito.' })
  @ApiResponse({ status: 404, description: 'Receta no encontrada.' })
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }
}