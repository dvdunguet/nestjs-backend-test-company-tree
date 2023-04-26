## Open GraphQL playground

- [http://localhost:3000/graphql](http://localhost:3000/graphql)

### Input request

```graphql
query {
  company(id: "uuid-2") {
    id
    name
    parentId
    createdAt
    cost
    children {
      id
      name
      parentId
      createdAt
      cost
      children {
        id
        name
        parentId
        createdAt
        cost
        children {
          id
          name
          parentId
          createdAt
          cost
          children {
            id
            name
            parentId
            createdAt
            cost
          }
        }
      }
    }
  }

  companies {
    id
    name
    parentId
    createdAt
    cost
    children {
      id
      name
      parentId
      createdAt
      cost
      children {
        id
        name
        parentId
        createdAt
        cost
        children {
          id
          name
          parentId
          createdAt
          cost
          children {
            id
            name
            parentId
            createdAt
            cost
          }
        }
      }
    }
  }
}
```

### Response request

```json
{
  "data": {
    "company": {
      "id": "uuid-2",
      "name": "Stamm LLC",
      "parentId": "uuid-1",
      "createdAt": "2021-02-25T10:35:32.978Z",
      "cost": 5199,
      "children": [
        {
          "id": "uuid-4",
          "name": "Price and Sons",
          "parentId": "uuid-2",
          "createdAt": "2021-02-25T06:11:47.519Z",
          "cost": 1340,
          "children": null
        },
        {
          "id": "uuid-7",
          "name": "Zieme - Mills",
          "parentId": "uuid-2",
          "createdAt": "2021-02-25T07:56:32.335Z",
          "cost": 1636,
          "children": null
        },
        {
          "id": "uuid-19",
          "name": "Schneider - Adams",
          "parentId": "uuid-2",
          "createdAt": "2021-02-25T21:06:18.777Z",
          "cost": 794,
          "children": null
        }
      ]
    },
    "companies": [
      {
        "id": "uuid-1",
        "name": "Webprovise Corp",
        "parentId": "0",
        "createdAt": "2021-02-26T00:55:36.632Z",
        "cost": 52983,
        "children": [
          {
            "id": "uuid-2",
            "name": "Stamm LLC",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T10:35:32.978Z",
            "cost": 5199,
            "children": [
              {
                "id": "uuid-4",
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "cost": 1340,
                "children": null
              },
              {
                "id": "uuid-7",
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "cost": 1636,
                "children": null
              },
              {
                "id": "uuid-19",
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "cost": 794,
                "children": null
              }
            ]
          },
          {
            "id": "uuid-3",
            "name": "Blanda, Langosh and Barton",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T15:16:30.887Z",
            "cost": 15713,
            "children": [
              {
                "id": "uuid-5",
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "cost": 1288,
                "children": null
              },
              {
                "id": "uuid-6",
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "cost": 2512,
                "children": null
              },
              {
                "id": "uuid-9",
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "cost": 3086,
                "children": null
              },
              {
                "id": "uuid-17",
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "cost": 4072,
                "children": null
              },
              {
                "id": "uuid-20",
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "cost": 908,
                "children": null
              }
            ]
          },
          {
            "id": "uuid-8",
            "name": "Bartell - Mosciski",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T23:47:57.596Z",
            "cost": 28817,
            "children": [
              {
                "id": "uuid-10",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "cost": 4288,
                "children": null
              },
              {
                "id": "uuid-11",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "cost": 12236,
                "children": [
                  {
                    "id": "uuid-12",
                    "name": "Swaniawski Inc",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T06:44:56.245Z",
                    "cost": 2110,
                    "children": null
                  },
                  {
                    "id": "uuid-14",
                    "name": "Weimann, Runolfsson and Hand",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T15:22:08.098Z",
                    "cost": 7254,
                    "children": null
                  }
                ]
              },
              {
                "id": "uuid-13",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "cost": 1686,
                "children": null
              },
              {
                "id": "uuid-15",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "cost": 4725,
                "children": null
              },
              {
                "id": "uuid-16",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "cost": 3277,
                "children": null
              }
            ]
          },
          {
            "id": "uuid-18",
            "name": "Walter, Schmidt and Osinski",
            "parentId": "uuid-1",
            "createdAt": "2021-02-26T02:31:22.154Z",
            "cost": 2033,
            "children": null
          }
        ]
      }
    ]
  }
}
```
