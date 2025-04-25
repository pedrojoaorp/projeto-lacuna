import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [PrismaModule, RecipeModule, IngredientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
