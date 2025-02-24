import { Recipe } from "./recipe";

export const eggs: Recipe[] = [
    {
        name: 'Omelette',
        variants: [
            {
                name: 'Denver'
            },
            {
                name: 'Omurice'
            },
            {
                name: 'Omusuba'
            }
        ]
    },
    {
        name: 'Fritata',
        variants: [{
            name: 'Strata'
        }, {
            name: 'Quiche',
            variants: [{
                name: 'Quiche Lorraine',
                key: ['bacon']
            }]
        }]
    },
    {
        name: 'Oyakudon'
    },
    {
        name: 'Eggs Benedict'
    },
    {
        name: 'Huevos Rotos'
    },
    {
        name: 'Huevos Divorciados'
    },
    {
        name: 'Huevos Rancheros'
    },
    {
        name: 'Shakshuka',
        variants: [{
            name: 'Huevos a La Flamenca'
        }, {
            name: 'Huevos Ahogados'
        }]
    }
    // Tamago Kake Gohan

    // tortilla de patata
    // deviled eggs
    // silog
];
