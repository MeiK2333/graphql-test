### Union

```graphql
{
  search(cookName: "Kim Kardashian") {
    ... on Recipe {
      title
    }
    ... on Cook {
      name
      yearsOfExperience
    }
  }
}
"""
{
  "data": {
    "search": [
      {
        "title": "Recipe 1"
      },
      {
        "title": "Recipe 3"
      },
      {
        "name": "Kim Kardashian",
        "yearsOfExperience": 1
      }
    ]
  }
}
"""
```

### Enum

```graphql
{
  recipes(difficulty: Beginner) {
    title
  }
}
"""
{
  "data": {
    "recipes": [
      {
        "title": "Recipe 1"
      },
      {
        "title": "Recipe 2"
      },
      {
        "title": "Recipe 3"
      },
      {
        "title": "Recipe 4"
      },
      {
        "title": "Recipe 5"
      }
    ]
  }
}
"""
```

### Query

```graphql
{
  recipes {
    title
    description
    ingredients
    preparationDifficulty
    cook {
      name
    }
  }
}
"""
{
  "data": {
    "recipes": [
      {
        "title": "Recipe 1",
        "description": "Desc 1",
        "ingredients": [
          "one",
          "two",
          "three"
        ],
        "preparationDifficulty": "Easy",
        "cook": {
          "name": "Kim Kardashian"
        }
      },
      {
        "title": "Recipe 2",
        "description": "Desc 2",
        "ingredients": [
          "four",
          "five",
          "six"
        ],
        "preparationDifficulty": "Easy",
        "cook": {
          "name": "Gordon Ramsay"
        }
      },
      {
        "title": "Recipe 3",
        "description": null,
        "ingredients": [
          "seven",
          "eight",
          "nine"
        ],
        "preparationDifficulty": "Beginner",
        "cook": {
          "name": "Kim Kardashian"
        }
      },
      {
        "title": "Recipe 4",
        "description": "Desc 4",
        "ingredients": [
          "ten",
          "eleven",
          "twelve"
        ],
        "preparationDifficulty": "MasterChef",
        "cook": {
          "name": "Gordon Ramsay"
        }
      },
      {
        "title": "Recipe 5",
        "description": null,
        "ingredients": [
          "thirteen",
          "fourteen",
          "fifteen"
        ],
        "preparationDifficulty": "Hard",
        "cook": {
          "name": "Gordon Ramsay"
        }
      }
    ]
  }
}
"""
```
