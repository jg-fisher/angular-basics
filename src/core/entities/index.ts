class RecipeItem {
    public name:string;
    public amount:string;

    public constructor(init?:Partial<RecipeItem>) {
        Object.assign(this, init);
    }
}

class Recipe {
    title:string;
    items:Array<RecipeItem>;

     public constructor(init?:Partial<Recipe>) {
        Object.assign(this, init);
    }
}

export {
    Recipe,
    RecipeItem
}