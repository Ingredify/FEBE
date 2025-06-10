## Ingredify API Documentation

#### Register

- URL : `/register`
- Method : `POST`
- Request Body:

```json
{
  "name": "user-name", // string
  "email": "username@gmail.com", // string
  "password": "randomstring" // string, min-length: 8
}
```

- Response Body:

```json
{
  "error": false,
  "message": "User created"
}
```

#### Login

- URL : `/login`
- Method : `POST`
- Request Body:

```json
{
  "email": "email@gmail.com", //string
  "password": "yourpassword" //string, min-length: 8
}
```

- Response Body:

```json
{
  "error": false,
  "message": "Login successful",
  "token": "<token>"
}
```

#### Add Collection

- URL : `/collection`
- Method : `POST`
- Headers :
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`
- Request Body:

```json
{
  "name": "collection-name", // string
  "description": "yourdescription" // string, optional
}
```

- Response Body:

```json
{
  "status": "success",
  "message": "Collection created",
  "data": {
    "collection": {
      "id": 2,
      "name": "Collection 123",
      "description": "",
      "userId": 1,
      "createdAt": "2025-06-07T10:44:09.250Z",
      "updatedAt": "2025-06-07T10:44:09.250Z"
    }
  }
}
```

#### Get Collections

- URL : `/collection`
- Method : `GET`
- Headers :

  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

- Response Body:

```json
{
  "status": "success",
  "data": [
    {
      "name": "Collection 1",
      "id": 1,
      "createdAt": "2025-06-07T10:40:51.836Z"
    },
    {
      "name": "Collection 123",
      "id": 2,
      "createdAt": "2025-06-07T10:44:09.250Z"
    }
  ]
}
```
#### Get Specific Collection 

- URL : `/collection/{id}`
- Method : `GET`
- Headers :
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`

- Response Body:

```json
{
    "status": "success",
    "data": {
        "id": 2,
        "name": "Collection 123",
        "description": "",
        "userId": 1,
        "createdAt": "2025-06-07T10:44:09.250Z",
        "updatedAt": "2025-06-07T10:44:09.250Z"
    }
}
```
