```graphql
{
  recipes {
    title
    description
    ratings {
      value
    }
    author {
      email
      nickname
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
        "ratings": [
          {
            "value": 2
          },
          {
            "value": 4
          },
          {
            "value": 5
          },
          {
            "value": 3
          },
          {
            "value": 4
          }
        ],
        "author": {
          "email": "meik2333@github.com",
          "nickname": "MichalLytek"
        }
      },
      {
        "title": "Recipe 2",
        "description": null,
        "ratings": [
          {
            "value": 2
          },
          {
            "value": 4
          }
        ],
        "author": {
          "email": "meik2333@github.com",
          "nickname": "MichalLytek"
        }
      },
      {
        "title": "title",
        "description": "desc",
        "ratings": [],
        "author": {
          "email": "meik2333@github.com",
          "nickname": "MichalLytek"
        }
      }
    ]
  }
}
"""
```

```graphql
mutation {
  addRecipe(recipe: {
    title: "title"
    description: "desc"
  }) {
    title
    description
    author {
      nickname
      email
    }
  }
}
"""
{
  "data": {
    "addRecipe": {
      "title": "title",
      "description": "desc",
      "author": {
        "nickname": "MichalLytek",
        "email": "meik2333@github.com"
      }
    }
  }
}
"""
```