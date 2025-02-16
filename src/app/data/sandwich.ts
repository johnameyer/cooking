// https://en.wikipedia.org/wiki/List_of_sandwiches
// https://sandwichdad.ca/2021/03/26/encyclopedia-of-sandwiches/
// https://www.brueggers.com/menu/
// https://www.potbelly.com/menu/sandwiches
// https://www.ikessandwich.com/menu/
// https://www.firehousesubs.com/menu
// https://whichwich.com/menu/
// https://eathomegrown.com/menu
// https://www.quiznos.com/menu/
// https://www.subway.com/en-ca/menunutrition/menu

import { Recipe } from "./recipe"

export const sandwiches: Recipe[] = [
    {
        name: 'Breakfast',
        key: ['egg', 'meat', 'cheese'],
        // bacon sausage
        optional: ['bagel', 'biscuit']
    },
    {
        name: 'Torta', // telera or bolillo / birote (baguette) - mildly crusty
        key: ['avocado', 'guac'],
        optional: ['onion', 'tomato', 'pickled jalapeno', 'refried beans', 'mayo'],
        variants: [{
            name: 'Torta Ahogada',
            key: ['salsa rojo'],
            // crunchy bread birote
        }]
    },
    {
        name: 'Banh Mi',
        key: ['baguette', 'cucumber', 'cilantro', 'pickled carrot', 'pickled daikon', 'meat'],
        optional: ['jalapeno']
    },
    {
        name: 'Italian',
        key: ['salami', 'capricola', 'peperroni', 'mortadella', 'provolone'],
        optional: ['onion', 'tomato', 'hot peppers', 'olive oil', 'red wine vinegar', 'oregano']
    },
    // Ham and cheese derivatives?
    {
        name: 'Croque Monsier',
        key: ['ham', 'dijon mustard', 'gruyere'], // emmental cheese, comte or swiss
        optional: ['bechamel sauce', 'parmesean'], // mornay
        variants: [{
            name: 'Croque Madame',
            key: [{ name: 'egg', modifier: 'fried' }],
        }]
    },
    {
        name: 'Monte Cristo',
        key: ['french toast', 'ham', 'gruyere', 'dijon mustard', 'jam'], // raspberry? turkey? camelized onion?
        optional: ['powdered sugar']
    },
    // panini
    {
        name: 'Cuban',
        key: ['pork', 'ham', 'pickles', 'swiss', 'mustard']
    },
    // sub (deli)
    {
        name: 'Mufalatta',
        key: ['olive salad', 'cold cuts', 'provolone'] // (Sopressata | salami | peperroni) & (mortadella | bologna) & (Ham | capricola | proscuitto | speck)
    },
    // mortadella
    {
        name: 'French Dip',
        key: [{name: 'roast beef', modifier: 'thinly sliced' }, 'au jus'],
        optional: ['swiss cheese', 'onion']
    },
    {
        name: 'Club',
        key: ['chicken', 'bacon', 'tomato', 'mayo'],
        optional: ['turkey']
    },
    // Chicken Salad
    {
        name: 'Thanksgiving',
        aliases: ['Pilgrim'],
        key: ['turkey', 'stuffing', 'cranberry', 'gravy'],
        optional: ['muenster', 'lettuce', 'mayo']
    },
    {
        name: 'Grilled Cheese',
        // aliases: ['Melt'], // Or is melt the parent and grilled a specific type where the bread is griddled? I.e. combining with cheesesteak
        key: ['hoagie roll', 'cheese'],
        variants: [{
            name: 'Cheese and Tomato',
            key: ['tomato']
        }]
    },
    {
        name: 'Cheesesteak',
        key: [{name: 'steak', modifier: 'thinly sliced'}, {name: 'cheese', modifier: 'melted'}], // provolone, american, cheese wiz
        optional: [{name: 'onion', modifier: 'grilled'}, {name: 'green bell pepper', modifier: 'grilled'}, {name: 'mushroom', modifier: 'grilled'}, 'garlic aioli'],
        // variation: chopped cheese
    },
    {
        name: 'Chivito',
        key: ['bun', {name: 'steak', modifier: 'sliced'}, 'mozarella', 'ham', 'tomato', 'mayo', 'olive'],
        optional: ['bacon', 'egg']
    },
    {
        name: 'Lox',
        key: ['bagel', 'smoked salmon', 'red onion', 'capers', 'cream cheese'],
        optional: ['tomato', 'cucumber', 'dill']
    },
    {
        // red robin
        name: 'Burger',
        key: ['bun', 'burger'],
        optional: ['cheese', 'lettuce', 'tomato', 'onion', 'bacon', 'relish', 'mayo', 'avocado', 'onion straws', 'sauce'],
        variants: [
            // black and bleu
            // mushroom swiss
            // BBQ (bacon)
            // breakfast
            // jalapeno / hatch chili
            // chili
            // southwest
            {
                name: 'Patty Melt',
                key: ['rye', 'swiss', {name: 'onion', modifier: 'caramelized'}],
            },
        ]
    },
    // (hot) chicken
    // texas toast
    // pbj
    {
        name: 'Peanut Butter and Jelly',
        key: ['bread', 'peanut butter', 'jelly']
    },
    // meatball grinder / pizza / chicken parm
    {
        name: 'Chicken Parmigiana',
        key: ['bread', { name: 'chicken', modifier: 'breaded' }, 'tomato sauce', 'mozzarella']
    },
    // blt(a)
    // mushroom swiss
    // mediterrean
    // roast beef (beef on weck)
    // chicken salad / tuna salad / egg salad
    // wreck - where to live?
    // bbq - pulled pork / brisket
    // lobster
    // po boy
    // choripan
    // gyro
    // shwarma
    // doner kebab
    // cemita
    // falafel
    {
        name: 'Reuben',
        key: ['rye', 'corned beef', 'swiss', 'sauerkraut', 'thousand island dressing' /* or russian */, 'horseradish'],
    },
    {
        name: 'Pastrami',
        key: ['rye', 'spicy mustard', 'pickle']
    },
    // buffalo chicken
    // chicken (fried)
    // corned beef
    // piadina
    // francesinha
    // bacon ranch (cheddar)
    // cajan chicken / jerk chicken
    // cordon bleu
    // ham - jabon buerre
    // katsu
    {
        name: 'Italian Beef',
        key: ['french bread', 'roast beef', 'au jus', 'giardiniera'], // hot or sweet
        optional: ['cheese'],
        // crusty
    },
    // chicken avo (chipotle / verde)
    // fried green tomato
    // caprese (green goddess)
    {
        name: 'Caprese',
        key: ['tomato', 'mozzarella', 'basil'],
        optional: ['chicken', 'green goddess', 'garlic aioli', 'red onion', 'balsamic']
    },
    // sloppy joe
    // sandwich de lomo
    // arepa
    // burrito (mission)


    // separate wraps?

    {
        name: 'Hot Dog',
        key: ['bun', 'sausage'],
        // https://www.reddit.com/r/coolguides/comments/eiu8bb/guide_to_different_styles_of_hot_dogs/#lightbox
        variants: [{
            name: 'New York-Style',
            key: ['mustard', 'sauerkraut', 'onion sauce'],
        }, {
            name: 'Chicago-Style Hot Dog',
            key: ['poppy-seed bun', 'white onion, chopped', 'sweet pickle relish', 'dill pickle, spear', 'yellow mustard', 'tomato, sliced', 'sport peppers, pickled', 'celery salt'],
        }, {
            name: 'Seattle-Style Hot Dog',
            key: ['cream cheese', 'onion, grilled'],
            optional: ['jalapenos, grilled']
        }, {
            name: 'Sonoran',
            key: ['hot dog, bacon-wrapped', 'relish', 'tomatoes', 'onion', 'avocado, chunked', 'mayo']
        }, {
            name: 'Maxwell Street',
            key: ['polish sausage', 'onion, grilled', 'mustard'],
            optional: ['sport peppers']
        }, {
            name: 'Danger Dog',
            aliases: ['Tijuana'],
            key: ['hot dog, bacon-wrapped', 'peppers, grilled', 'onion', 'jalapeno']
        }, {
            name: 'Chili',
            key: ['chili'],
            optional: ['onion', 'cheese', 'mustard']
        }]
        // https://www.rhleavenworth.com/view-menu
    },
    // bruschetta
]

// empanada
// pasty
// phyllo

const wraps = [
    
]

const toppings = [
    'mayo',
    'mustard',
    'hot peppers',
    'sweet peppers',
    'lettuce',
    'tomato',
    'onion',
    'pickle',
    'oil',
    'cucumbers',
    'roasted red pepper',
    'artichoke hearts',
    'avocado',
    'bacon',
    'mushrooms',
    'chips' // crunch
    // fries
    // spinach
    // fajita veggies
    // carmelized onions
]

const cheeses = [
    'provolone',
    'cheddar',
    'pepperjack',
    'swiss',
    'american'
]

const sauces = [
    'mayo',
    'oil',
    'ranch',
    'buffalo',
    'chipotle',
    'spicy mustard',
    'yellow mustard',
    'ketchup',
    'bbq',
    'garlic aioli',
    'hot honey',
    'caesar dressing',
    'red wine vinegar',
    'honey mustard',
    'cream cheese',
    'salsa roja',
]