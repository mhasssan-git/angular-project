import { Inject } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Inject({
  providerIn: 'root',
})
export class ShoppingListService {
  constructor() {}
  //ingredientChanges = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredientChanges = new Subject<Ingredient[]>();
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingredientChanges.emit(this.ingredients.slice());
    this.ingredientChanges.next(this.ingredients.slice());
  }
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tometoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    //this.ingredientChanges.emit(this.ingredients.slice())
    this.ingredientChanges.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanges.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
   this.ingredients.splice(index,1);
   this.ingredientChanges.next(this.ingredients.slice());
  }
}
