```markdown
# Brewapps_Backend_API Project

Welcome to the Brewapps Backend API Project! This repository contains a simple API for managing books. Below are the details on how to interact with the API.

## Routes

### 1. Create a Book

**Endpoint:** `POST /api/createBook`

**Request Body:**
```json
{
    "title": "A new jungle",
    "author": "chetan bhagat",
    "summary": "This story is of the prisoner of a jungle"
}
```

**Response:**
```json
{
    "status": true,
    "msg": "Book Created",
    "data": {
        "title": "A new jungle",
        "author": "chetan bhagat",
        "summary": "This story is of the prisoner of a jungle",
        "_id": "654ca5ade2035c211b7e3370",
        "createdAt": "2023-11-09T09:26:05.375Z",
        "updatedAt": "2023-11-09T09:26:05.375Z",
        "__v": 0
    }
}
```

### 2. Get All Books

**Endpoint:** `GET /api/getAllBooks`

**Response:**
```json
{
    "status": true,
    "msg": "1 Book Found",
    "data": [
        {
            "_id": "654c8c602ed4addd42630efe",
            "title": "A new jungle",
            "author": "chetan bhagat",
            "summary": "This story is of the prisoner of a jungle",
            "createdAt": "2023-11-09T07:38:08.510Z",
            "updatedAt": "2023-11-09T07:38:08.510Z",
            "__v": 0
        }
    ]
}
```

### 3. Get Book by ID

**Endpoint:** `GET /api/getBookById/:id`

**Example:** `GET /api/getBookById/654c8c602ed4add42630efe`

**Response:**
```json
{
    "status": true,
    "msg": "Book Found",
    "data": {
        "_id": "654c8c602ed4addd42630efe",
        "title": "A new jungle",
        "author": "chetan bhagat",
        "summary": "This story is of the prisoner of a jungle",
        "createdAt": "2023-11-09T07:38:08.510Z",
        "updatedAt": "2023-11-09T07:38:08.510Z",
        "__v": 0
    }
}
```

### 4. Update Book by ID

**Endpoint:** `PUT /api/updateBookById/:id`

**Example:** `PUT /api/updateBookById/654c8c602ed4add42630efe`

**Request Body:**
```json
{
    "title": "Book Of Jungle",
    "author": "Bhagat Chetan"
}
```

**Response:**
```json
{
    "status": true,
    "msg": "Book Updated",
    "data": {
        "_id": "654ca51174ff09ca8364fd83",
        "title": "Book Of Jungle",
        "author": "Bhagat Chetan",
        "summary": "This story is of the prisoner of a jungle",
        "createdAt": "2023-11-09T09:23:29.049Z",
        "updatedAt": "2023-11-09T12:24:19.220Z",
        "__v": 0
    }
}
```

### 5. Delete Book by ID

**Endpoint:** `DELETE /api/deleteBookById/:id`

**Example:** `DELETE /api/deleteBookById/654ca51174ff09ca8364fd83`

**Response:**
```json
{
    "status": true,
    "msg": "Book Deleted"
}
```

Note: The book will not be deleted from the database but will be removed from the API response.

## Repository

This project is hosted on GitHub. You can find it at [ABCD Repository](https://github.com/<your_username>/ABCD).
```

Feel free to customize it further to match your project's specific details!