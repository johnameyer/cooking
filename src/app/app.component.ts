import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from "./random/random.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cooking';
}
