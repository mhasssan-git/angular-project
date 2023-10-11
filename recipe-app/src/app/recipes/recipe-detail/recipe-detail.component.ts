import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = +route.snapshot.params['id'];
    this.recipe = recipeService.getRecipe(this.id);
    route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = recipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    //this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../',this.id,'edit'], { relativeTo: this.route })
  }
}
