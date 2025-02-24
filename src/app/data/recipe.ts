export type Recipe = {
    name: string,
    aliases?: string[],
    key?: Ingredient[],
    optional?: Ingredient[],
    // substitutions?
    // override parents?
    // compositional relationship? relative proportions?
    // differentiate between general groupings and generic recipies (with optionals that don't make sense for children)
    // builders? (i.e. pick base, meat, toppings, etc.)
    variants?: Recipe[],
    notes?: string,
}

export type Specification = Ingredient; // Alternation

export type Ingredient = string | {
    name: string,
    modifier: string,
}

export const resolve = (parent: Recipe, variation: Recipe): Recipe => ({
    ...variation,
    name: `${parent.name} > ${variation.name}`,
    key: [...(parent.key ?? []), ...(variation.key ?? [])],
});