import { antojitos } from "./antojitos";
import { bowls } from "./bowls";
import { breakfast } from "./breakfast";
import { casseroles } from "./casserole";
import { eggs } from "./egg";
import { misc } from "./miscellany";
import { noodles } from "./noodles";
import { pizzas } from "./pizza";
import { Recipe } from "./recipe";
import { rice } from "./rice";
import { sandwiches } from "./sandwich";
import { soups } from "./soups";
import { stews } from "./stews";
import { stirfry } from "./stirfry";
import { wraps } from "./wraps";

export const all: Recipe[] = [
    { name: 'Antojitos', variants: antojitos },
    // { name: 'Appetizers', variants: }
    { name: 'Bowls', variants: bowls },
    // { name: 'Braise', variants: },
    { name: 'Breakfast', variants: breakfast },
    { name: 'Casserole', variants: casseroles },
    { name: 'Egg', variants: eggs },
    { name: 'Miscellany', variants: misc },
    { name: 'Noodles', variants: noodles },
    { name: 'Pizza', variants: pizzas },
    { name: 'Rice', variants: rice },
    { name: 'Sandwich', variants: sandwiches },
    // Sides
    { name: 'Soups', variants: soups },
    { name: 'Stews', variants: stews },
    { name: 'Stirfry', variants: stirfry },
    { name: 'Wraps', variants: wraps },
];

const slug = (name: string) => name.toLowerCase().replaceAll(' ', '-');

export const toURI = (heirarchy: Recipe[]) => heirarchy.map(recipe => encodeURIComponent(slug(recipe.name))).join('/');

export const fromURI = (uri: string[]) => {
    let array = all;
    const items: Recipe[] = [];
    let i = 0;
    for(; i < uri.length; i++) {
        const item = array.find(item => slug(item.name) === uri[i]);
        if(!item) {
            break;
        }
        items.push(item);
        if(!item.variants) {
            break;
        }
        array = item.variants;
    }
    return items;
}

export const randomRecipe = () => {
    let array: Recipe[] | Recipe[][] = all;
    const items: Recipe[] = [];
  
    while(Array.isArray(array)) {
      const item: Recipe | Recipe[] = random<Recipe | Recipe[]>(array);
      if(items.at(-1) !== undefined && item === items.at(-1)) {
        break;
      } if(Array.isArray(item)) {
        array = item;
      } else {
        items.push(item);
        if('variants' in item && item.variants) {
          if(item.key || item.optional) {
            array = [item, ...item.variants];
          } else {
            array = item.variants;
          }
        } else {
          break;
        }
      }
    }
  
    return items;
  }
  
  const random = <T> (items: T[]) => items[Math.floor(Math.random()*items.length)];