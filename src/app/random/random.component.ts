import { Component } from '@angular/core';
import { randomRecipe, toURI } from '../data/all';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
})
export class RandomComponent {
  constructor(private router: Router){ 
  }

  selectRandom() {
    const items = randomRecipe();
    const uri = toURI(items);
    this.router.navigateByUrl(uri);
  }
}