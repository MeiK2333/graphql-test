## Query

```graphql
{
  recipe(title: "Recipe 1") {
    title
    specification
    description
    ratings
    creationDate
    ratingsCount
    averageRating
  }
}
"""
{
  "data": {
    "recipe": {
      "title": "Recipe 1",
      "specification": "Desc 1",
      "description": "Desc 1",
      "ratings": [
        0,
        3,
        1
      ],
      "creationDate": "2018-04-11T00:00:00.000Z",
      "ratingsCount": 3,
      "averageRating": 1.3333333333333333
    }
  }
}
"""
```

```graphql
{
  recipes {
    title
    specification
    description
    ratings
    creationDate
    ratingsCount
    averageRating
  }
}
"""
{
  "data": {
    "recipes": [
      {
        "title": "Recipe 1",
        "specification": "Desc 1",
        "description": "Desc 1",
        "ratings": [
          0,
          3,
          1
        ],
        "creationDate": "2018-04-11T00:00:00.000Z",
        "ratingsCount": 3,
        "averageRating": 1.3333333333333333
      },
      {
        "title": "Recipe 2",
        "specification": "Desc 2",
        "description": "Desc 2",
        "ratings": [
          4,
          2,
          3,
          1
        ],
        "creationDate": "2018-04-15T00:00:00.000Z",
        "ratingsCount": 4,
        "averageRating": 2.5
      },
      {
        "title": "Recipe 3",
        "specification": "Desc 3",
        "description": "Desc 3",
        "ratings": [
          5,
          4
        ],
        "creationDate": "2020-04-07T07:16:51.724Z",
        "ratingsCount": 2,
        "averageRating": 4.5
      }
    ]
  }
}
"""
```

## Mutation

```graphql
mutation {
  addRecipe(recipe: { title: "title", description: "desc" }) {
    creationDate
  }
}
"""
{
  "data": {
    "addRecipe": {
      "creationDate": "2020-04-07T07:15:20.336Z"
    }
  }
}
"""
```
