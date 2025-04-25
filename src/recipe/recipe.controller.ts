import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Prisma, Recipe as RecipeModel } from 'generated/prisma';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() data: Prisma.RecipeCreateInput): Promise<RecipeModel> {
    return this.recipeService.createRecipe(data);
  }

  @Get()
  async findAll(): Promise<RecipeModel[]> {
    return this.recipeService.findAllRecipes({});
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RecipeModel | null> {
    return this.recipeService.findOneRecipe({ id: Number(id) });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.RecipeUpdateInput,
  ) {
    return this.recipeService.updateRecipe({
      where: { id: Number(id) },
      data: data,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<RecipeModel> {
    return this.recipeService.deleteRecipe({ id: Number(id) });
  }

  @Get('/formatted/:id')
  async getFormatted(@Param('id') id: string): Promise<string[]> {
    return this.recipeService.getFormattedRecipe({ id: Number(id) });
  }
}
