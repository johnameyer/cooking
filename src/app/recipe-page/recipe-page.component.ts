import { Component, computed, input } from '@angular/core';
import { fromURI } from '../data/all';
import { RecipeViewComponent } from "../recipe-view/recipe-view.component";
import { resolve } from '../data/recipe';

@Component({
  selector: 'app-recipe-page',
  imports: [RecipeViewComponent],
  templateUrl: './recipe-page.component.html',
})
export class RecipePageComponent {
  uri = input.required<string>();
  recipe = computed(() => fromURI(this.uri().split('/').map(decodeURIComponent)).reduce(resolve));
}
