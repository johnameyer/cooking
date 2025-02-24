import { Component, input } from '@angular/core';
import { Ingredient, Recipe } from '../data/recipe';
import { RouterLink } from '@angular/router';
import { toURI } from '../data/all';

@Component({
  selector: 'app-recipe-view',
  imports: [RouterLink],
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

  toURI = toURI;
}
