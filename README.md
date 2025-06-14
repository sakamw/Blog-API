# Blog API

A simple RESTful Blog API built with **Express.js**, **Prisma ORM**, and **PostgreSQL**.

This API allows you to create users and blog posts, retrieve user and post data (including their relationships), update posts, and perform soft-deletion on posts.

## Technologies Used

- **Node.js** with **Express.js** for handling HTTP routes
- **Prisma ORM** for database interactions
- **PostgreSQL** as the relational database
- **dotenv** for environment variable management

## How to Run

1. Clone the repo:

   ```bash
   git clone https://github.com/sakamw/Blog-API
   ```

2. Install dependancies:

   ```bash
   pnpm init
   ```

3. Set up your .env fiel:

   ```ini
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
   PORT=4500
   ```

4. Run Prisma migrations:

   ```bash
   pnpm prisma migarte dev --name "initial-migration"
   ```

5. Run the server:

   ```bash
   pnpm run dev
   ```

## Endpoints

### POST /users

- Creates new Users

```json
{
  "id": "a383214d-0695-47bc-ba78-85416414ee55",
  "firstName": "Murray",
  "lastName": "Miller",
  "emailAddress": "Joannie87@gmail.com",
  "username": "Donnie_Swaniawski"
}
```

### GET /users

- Returns a list of all users

```json
[
  {
    "id": "3d9c3aad-b6a0-47ec-a6e6-aa6863686321",
    "firstName": "Griffin",
    "lastName": "Schinner",
    "emailAddress": "Gerhard_Fadel47@hotmail.com",
    "username": "Eriberto_Weimann"
  },
  {
    "id": "c5abe78d-db52-42f8-81c7-890152bff797",
    "firstName": "Raina",
    "lastName": "Cruickshank",
    "emailAddress": "Bernardo.Rosenbaum@yahoo.com",
    "username": "Verda_Grant81"
  },
  {
    "id": "9179a699-da95-4998-8ecf-7f05f785a01d",
    "firstName": "Muhammad",
    "lastName": "Donnelly",
    "emailAddress": "Curt.Lakin11@yahoo.com",
    "username": "Rafael2"
  },
  {
    "id": "0e8bfa85-2e89-4c8e-aa1a-cac22f474470",
    "firstName": "Dolly",
    "lastName": "Leuschke",
    "emailAddress": "Margie_Strosin@hotmail.com",
    "username": "Blaze_Dooley"
  },
  {
    "id": "d3b8f20e-77cf-4d22-bd4d-8006c6712eb3",
    "firstName": "Jazmin",
    "lastName": "Rogahn",
    "emailAddress": "Lavina_Kilback@gmail.com",
    "username": "Murphy36"
  }
]
```

### GET /users/:id

- Returns a single user by ID along with their blog posts

```json
{
  "id": "5ef743d2-1257-4ab6-8dbe-20650b19ac79",
  "firstName": "Malachi",
  "lastName": "Lynch",
  "emailAddress": "Barton_Rolfson26@yahoo.com",
  "username": "Duane50",
  "posts": [
    {
      "id": "aa993932-f043-4d3c-9f61-7765a63b89b4",
      "title": "Laborum veniam et rerum voluptas officia recusandae laudantium. Quas eos nam quo sit labore. Et porro voluptas aut amet corporis voluptatem. Rem ipsa voluptatum in at. Sint in quia. Est temporibus sequi reprehenderit.",
      "content": "Optio sit rerum aliquam nulla explicabo et fugit deleniti et. Et vel ea soluta quos. Assumenda corrupti perspiciatis maiores magni maxime incidunt ab laudantium beatae. Ullam necessitatibus ipsum rem est soluta ea laborum et. Ducimus iusto aut enim eum est qui porro quisquam tempora.",
      "createdAt": "2025-06-13T16:46:02.165Z",
      "lastUpdated": "2025-06-13T16:46:02.165Z",
      "isDeleted": false,
      "userId": "5ef743d2-1257-4ab6-8dbe-20650b19ac79"
    },
    {
      "id": "4024e9d8-382f-472d-bfd9-6a2881bee4a9",
      "title": "Animi fugit voluptates maxime et ut.",
      "content": "Ratione molestias iure odio ut quidem eum illo enim. Molestias ipsum quidem maiores commodi cumque. Sit et et. Animi harum eum incidunt commodi. Magni id rerum eum sit. Inventore voluptatibus dolore omnis occaecati ut quia.",
      "createdAt": "2025-06-13T16:46:09.601Z",
      "lastUpdated": "2025-06-13T16:46:09.601Z",
      "isDeleted": false,
      "userId": "5ef743d2-1257-4ab6-8dbe-20650b19ac79"
    },
    {
      "id": "d0451ef0-bb10-4b21-bdbe-4c024474ab67",
      "title": "Quo ut amet culpa consequatur eos omnis iure.",
      "content": "Non amet eius. Odit repellendus ea dolorum quis laboriosam aut. Odio dolorum modi impedit vel delectus voluptatem. Qui quisquam ea iste omnis debitis provident sed itaque id. Vitae assumenda ratione eum. Et vero sunt doloremque.",
      "createdAt": "2025-06-13T16:46:13.441Z",
      "lastUpdated": "2025-06-13T16:46:13.441Z",
      "isDeleted": false,
      "userId": "5ef743d2-1257-4ab6-8dbe-20650b19ac79"
    }
  ]
}
```

### POST /posts

- Creates a new blog post

```json
{
  "id": "370d4e69-7151-4887-aa85-9c52c996a5d1",
  "title": "Voluptatum aut vitae aliquam rerum aut vitae.",
  "content": "Atque delectus ab vitae. Magnam ut dolores voluptas. Dolor exercitationem aut est. Et commodi beatae consequatur veniam quae facere optio ut.",
  "createdAt": "2025-06-14T21:30:09.420Z",
  "lastUpdated": "2025-06-14T21:30:09.420Z",
  "isDeleted": false,
  "userId": "a383214d-0695-47bc-ba78-85416414ee55"
}
```

### GET /posts/:id

- Returns a single post by ID along with the user of the post

```json
{
  "id": "370d4e69-7151-4887-aa85-9c52c996a5d1",
  "title": "Voluptatum aut vitae aliquam rerum aut vitae.",
  "content": "Atque delectus ab vitae. Magnam ut dolores voluptas. Dolor exercitationem aut est. Et commodi beatae consequatur veniam quae facere optio ut.",
  "createdAt": "2025-06-14T21:30:09.420Z",
  "lastUpdated": "2025-06-14T21:30:09.420Z",
  "isDeleted": false,
  "userId": "a383214d-0695-47bc-ba78-85416414ee55",
  "user": {
    "id": "a383214d-0695-47bc-ba78-85416414ee55",
    "firstName": "Murray",
    "lastName": "Miller",
    "username": "Donnie_Swaniawski"
  }
}
```

### PUT /posts/:id

- Updates a single post by ID

```json
{
  "id": "0d9fb482-e678-494e-bbea-464fdc7862f8",
  "title": "quod",
  "content": "Perspiciatis laudantium dicta placeat quo debitis ducimus accusantium. Quibusdam porro eaque tenetur aspernatur quo tempore excepturi.",
  "createdAt": "2025-06-13T16:44:51.467Z",
  "lastUpdated": "2025-06-14T21:44:10.902Z",
  "isDeleted": false,
  "userId": "3d9c3aad-b6a0-47ec-a6e6-aa6863686321"
}
```

### DEL /posts/:id

- Deletes a single post by ID and returns True after deletion

```json
{
  "message": "Post deleted successfully",
  "data": {
    "id": "11a346c4-1c16-4fd2-bfcb-cb5a2038af5a",
    "title": "consequatur",
    "content": "Ut et cumque sed accusamus. Sit voluptas quibusdam at sunt commodi. Officiis qui amet aut pariatur repellendus est.",
    "createdAt": "2025-06-13T16:38:02.509Z",
    "lastUpdated": "2025-06-14T21:46:58.760Z",
    "isDeleted": true,
    "userId": "3d9c3aad-b6a0-47ec-a6e6-aa6863686321"
  }
}
```
