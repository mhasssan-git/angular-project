import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipeselected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('Frence Fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test 2',
      'https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 2)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(index:number):Recipe
  {
    return this.recipes.slice()[index];
  }
}
