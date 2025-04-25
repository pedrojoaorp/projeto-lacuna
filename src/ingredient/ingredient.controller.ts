import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Prisma, Ingredient as IngredientModel } from 'generated/prisma';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  async create(
    @Body() data: Prisma.IngredientCreateInput,
  ): Promise<IngredientModel> {
    return this.ingredientService.createIngredient(data);
  }

  @Get()
  async findAll(): Promise<IngredientModel[]> {
    return this.ingredientService.findAllIngredients({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IngredientModel | null> {
    return this.ingredientService.findOneIngredient({ id: Number(id) });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.IngredientUpdateInput,
  ) {
    return this.ingredientService.updateIngredient({
      where: { id: Number(id) },
      data: data,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IngredientModel> {
    return this.ingredientService.deleteIngredient({ id: Number(id) });
  }
}
