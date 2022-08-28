export interface Dish {
    id: number | string,
    name: number | string,
    ingredients?: any[],
    instructions?: string
}

export interface Dishes {
    dishes: Dish[]
}

export interface Ingredient {
    name: string,
    amount: number,
    unit: 'g' | 'kg' | 'pc',
    calories: number
}

export interface Ingredients {
    ingredients: Ingredient[]
}