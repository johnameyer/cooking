import { Recipe } from "./recipe";

// https://www.pagliacci.com/order#pizza
// https://deweyspizza.com/menu/#specialty-pizza
// https://www.dominos.com/en/pages/order/#!/section/Food/category/AllPizzas/

export const pizzas: Recipe[] = [
    // stromboli, calzone
    {
        name: 'Misc',
        optional: ['pepperoni', 'sausage', 'ham', 'bacon', 'oregano', 'mushrooms', 'peperronata peppers', 'mamas little']
        /*
Mozzarella
Parmesan
Ricotta

Anchovies
Artichokes
Bacon
Banana peppers
Basil
Black olives
Canadian bacon
Corn
Extra cheese
Garlic
Green olives
Green peppers
Ham
Hot giardiniera
Hot peppers
Kalamata Olives
Meatball
Mushrooms
Onion
Pepperoni
Pineapple
Pickled jalapeno
Tomato
Ricotta cheese
Roasted red pepper
Salami
Sausage
Spinach
*/
    },
    {
        name: 'Cheese',
        variants: [
            {
                name: 'Quattro Formaggi',
                aliases: ['Four Cheese'],
                key: ['mozzarella', 'gorgonzola', 'cheese'],
                optional: ['red sauce', 'olive oil']
                // https://en.wikipedia.org/wiki/Pizza_quattro_formaggi
            }
        ]
    },
    {
        name: 'Meat Lover\'s',
        key: ['red sauce', 'mozzarella', 'pepperoni', 'sausage', 'bacon', 'ham'],
        optional: ['canadian bacon']
    },
    {
        name: 'Supreme',
        key: ['red sauce', 'mozzarella', 'sausage', 'green bell pepper', 'mushroom'],
        optional: ['onion', 'olives']
    },
    {
        name: 'Diavolo',
        key: ['red sauce', 'mozzarella', 'salami', 'hot peppers'],
        optional: [ 'black olives', 'hot honey' ],
    },
    // {
    //     name: 'Pizza capricciosa'
    // },
    {
        name: 'Pizza ai Funghi',
        key: ['red sauce', 'mozzarella', 'mushroom']
    },
    {
        name: 'Quattro Stagioni',
        aliases: ['Four Seasons'],
        key: ['red sauce', 'mozzarella', 'artichokes', 'basil', 'mushrooms', 'olives', 'proscuitto'],
        notes: 'Ingredients to be grouped into sections by season'
    },
    {
        name: 'White',
        key: ['mozzarella', 'olive oil', 'garlic'],
        optional: [{name: 'onion', modifier: 'caramelized'}]
    },
    {
        name: 'Buffalo Chicken',
        key: ['mozzarella', 'chicken', 'buffalo sauce', 'blue cheese']
    },
    // {
    //     name: 'Burrata'
    // },
    {
        name: 'Greek',
        key: ['mozzarella', 'feta', 'tomatoes', 'olives', 'onion', ], // Goat cheese
        optional: ['artichoke', 'garlic', 'spinach']
    },
    {
        name: 'Veggie',
        optional: ['mozzarella', 'mushrooms', 'green bell peppers', 'onions', 'artichokes']
    },
    // {
    //     name: 'Tandoor',
    // },
    {
        name: 'Hawaiian',
        key: ['red sauce', 'mozzarella', 'ham', 'pineapple']
    },
    {
        name: 'BBQ',
        key: ['mozzarella', 'chicken', 'bbq sauce', 'cheddar', 'red onion']
    },
    // {
    //     name: 'Pesto'
    // },
    // {
    //     name: 'Southwest'
    // },
    {
        name: 'Proscuitto',
        key: ['hot honey', 'proscuitto']
    },
    {
        name: 'Potato',
        key: ['mozzarella', 'potato', 'pecorino romano', 'rosemary']
    },
    {
        name: 'Chicken Bacon Ranch',
        key: ['mozzarella', 'chicken', 'bacon', 'ranch']
    },
    {
        name: 'Margherita',
        aliases: ['Neapolitan'],
        key: [{name: 'tomato', modifier: 'crushed'}, 'mozzarella', 'basil']
    },
    // {
    //     name: 'Breakfast'
    // }
    // Woodsman's
]