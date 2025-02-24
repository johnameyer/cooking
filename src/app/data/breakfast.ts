// TODO move egg dishes here?

import { Recipe } from "./recipe";

export const breakfast: Recipe[] = [
    {
        name: 'Full English',
        key: ['bacon', 'sausage', 'beans', 'toast', ],
        optional: ['egg', {name: 'tomato', modifier: 'fried'}, { name: 'mushrooms', modifier: 'fried'}, 'hash browns'],
    },
    {
        name: 'Steak and Eggs',
        key: ['steak', 'eggs']
    },
    {
        name: 'Hashbrowns',
        key: ['hash browns'],
        optional: ['onions', 'tomato', 'peppers', 'ham', 'mushrooms', 'chili', 'gravy'],
    },
    {
        name: 'Chilaquiles'
    },
    {
        name: 'Silog'
    },
    {
        name: 'Biscuits and Gravy'
    }
];

// waffle
// grits