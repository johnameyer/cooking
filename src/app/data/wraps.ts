import { Recipe } from "./recipe";

export const wraps: Recipe[] = [
    // dosa / kati roll / paratha
    // crepe

    {
        name: 'Pita wrap',
        // pita - https://staging.eatgarbanzo.com/menu/
        variants: [
            {
                name: 'Gyro'
            },
            {
                name: 'Falafel',
            },
            {
                name: 'Shwarma'
            }
        ]
    },
    {
        name: 'Tortilla wrap',
        variants: [
            // Tacos?
            {
                name: 'Burrito',
                variants: [
                    {
                        name: 'Breakfast Burrito'
                    },
                    {
                        name: 'Mission-style Burrito'
                    },
                    {
                        name: 'California-style Burrito',
                        key: ['carne asada', 'french fry', 'guacamole', 'pico de gallo', 'cheese']
                    },
                    {
                        name: 'Chimichanga'
                    },
                    {
                        name: 'Wet Burrito'
                    }
                    // Korean style
                ]
            },
            {
                name: 'Enchilada',
                variants: [
                    {
                        name: 'Enchiladas Suizas'
                    },
                    {
                        name: 'Enmoladas'
                        // Mole
                    },
                    {
                        name: 'Enchiladas Verdes'
                    },
                    {
                        name: 'Enchiladas Potosinas'
                    },
                    {
                        name: 'Enchiladas Rancheras'
                    }
                    // Enchiladas Banderas
                ]
            },
            {
                name: 'Taquito',
                aliases: ['Flauta']
            }
        ]
    },
    {
        name: 'Doner Kebab'
    }
]