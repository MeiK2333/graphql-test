import { Resolver, Query, FieldResolver, Root, ResolverInterface, Arg } from "type-graphql";

import { Recipe } from "./recipe-type";
import { createRecipeSamples } from "./recipe-samples";

@Resolver(of => Recipe)
export class RecipeResolver implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = createRecipeSamples();

  @Query(returns => [Recipe], {
    /*
      You can also pass a calculation function in the complexity option
      to determine a custom complexity. This function will provide the
      complexity of the child nodes as well as the field input arguments.
      That way you can make a more realistic estimation of individual field
      complexity values, e.g. by multiplying childComplexity by the number of items in array
    */
    complexity: ({ childComplexity, args }) => args.count * childComplexity,
  })
  async recipes(@Arg("count") count: number): Promise<Recipe[]> {
    return await this.items.slice(0, count);
  }

  /* Complexity in field resolver overrides complexity of equivalent field type */
  @FieldResolver({ complexity: 5 })
  ratingsCount(@Root() recipe: Recipe): number {
    return recipe.ratings.length;
  }
}
