import { Routes, UrlSegment } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { fromURI, randomRecipe, toURI } from './data/all';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: () => toURI(randomRecipe()),
}, {
    matcher: (url) => {
        const items = fromURI(url.map(segment => segment.path));
        // TODO better error handling
        return {consumed: url.slice(0, items.length), posParams: { uri: new UrlSegment(url.slice(0, items.length).join('/'), {}) }};
    },
    component: RecipePageComponent,
}, {
    path: '**',
    redirectTo: ''
}];

// http://localhost:4200/sandwich/pastrami