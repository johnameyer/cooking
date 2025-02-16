import { Component, input } from '@angular/core';
import { Ingredient, Recipe } from '../data/recipe';

@Component({
  selector: 'app-recipe-view',
  imports: [],
  templateUrl: './recipe-view.component.html',
})
export class RecipeViewComponent {
  recipe = input.required<Recipe>();

  // TODO allow variants / parents to link to each other

  ingredientToString = (ingredient: Ingredient) => {
    if(typeof ingredient === 'string') {
      return ingredient;
    } else {
      return `${ingredient.modifier} ${ingredient.name}`
    }
  };
}
