import { Recipe } from "./recipe";

// https://www.tasteatlas.com/stir-fry?ref=main-menu

export const stirfry: Recipe[] = [
    {
        name: 'Lomo Saltado'
    },
    {
        name: 'Pad Thai'
    },
    {
        name: 'Fried Rice',
        variants: [
            {
                name: 'Arroz Chaufa'
            }
        ]
    },
    {
        name: 'General Tso'
        // better category?
    },
    {
        name: 'Japchae'
    },
    {
        name: 'Cashew Chicken'
    },
    {
        name: 'Minchee'
    },
    {
        name: 'Basil Chicken'
    },
    {
        name: '"Mongolian" Barbeque'
    }
];