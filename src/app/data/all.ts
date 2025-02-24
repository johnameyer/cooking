import { eggs } from "./egg";
import { pizzas } from "./pizza";
import { Recipe } from "./recipe";
import { sandwiches } from "./sandwich";
import { wraps } from "./wraps";

export const all: Recipe[] = [
    { name: 'Sandwich', variants: sandwiches },
    { name: 'Pizza', variants: pizzas },
    { name: 'Wrap', variants: wraps },
    { name: 'Eggs', variants: eggs }
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