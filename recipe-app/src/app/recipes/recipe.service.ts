import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
 
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeselected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {
    console.log('recipeservice initialized')
  }
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe',
  //     'This is simply a test',
  //     'https://thebrilliantkitchen.com/wp-content/uploads/2023/02/Crockpot-Keto-Meatloaf-1.jpeg',
  //     [new Ingredient('Meat', 1), new Ingredient('Frence Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Another Test Recipe',
  //     'This is simply a test 2',
  //     'https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg',
  //     [new Ingredient('Buns', 1), new Ingredient('Meat', 2)]
  //   ),
  // ];
  private recipes: Recipe[]=[];
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(index: number): Recipe {
    return this.recipes.slice()[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }
  setRecipes(recipes:Recipe[])
  {
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice())
  }
}
