import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Recipe, Prisma } from 'generated/prisma';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
      include: { ingredients: true },
    });
  }

  async findAllRecipes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RecipeWhereUniqueInput;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput;
  }): Promise<Recipe[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.recipe.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { ingredients: true },
    });
  }

  async findOneRecipe(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput,
  ): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({
      where: recipeWhereUniqueInput,
      include: { ingredients: true },
    });
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const { where, data } = params;
    return this.prisma.recipe.update({
      data,
      where,
      include: { ingredients: true },
    });
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where,
      include: { ingredients: true },
    });
  }

  async getFormattedRecipe(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput,
  ): Promise<string[]> {
    const data = await this.prisma.recipe.findUnique({
      where: recipeWhereUniqueInput,
      include: { ingredients: true },
    });
    if (data) {
      const name = data?.name;
      const len = data?.ingredients.length;
      const qnts_str = data?.ingredients_qnts;
      const qnts = qnts_str.split('|');
      let ingr_formatted = '';
      for (let i = 0; i < len; i++) {
        ingr_formatted =
          ingr_formatted +
          `> ${data?.ingredients[i].name}: ${qnts[i]} ${data?.ingredients[i].unit}\n`;
      }
      return [
        `Receita: ${name}\nIngredientes:\n${ingr_formatted}\nInstruções:${data?.instructions}`,
      ];
    } else {
      throw new Error('500');
    }
  }
}
