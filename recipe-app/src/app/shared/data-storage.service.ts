import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url =
    'https://ng-course-recipe-book-f99eb-default-rtdb.firebaseio.com/recipes.json';
  constructor(
    private htpp: HttpClient,
    private recpieService: RecipeService,
    private authService: AuthService
  ) {}
  storeRecipes() {
    const recipes = this.recpieService.getRecipes();
    this.htpp.put(this.url, recipes).subscribe((response) => {});
  }
  fetchRecipe() {
    return this.htpp.get<Recipe[]>(this.url).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recpieService.setRecipes(recipes);
      })
    );
  }
}
