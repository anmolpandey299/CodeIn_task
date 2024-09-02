
# Movies Management API

This project is a RESTful API built with NestJS and PostgreSQL with TypeORM for managing a collection of movies. It includes features for creating, retrieving, updating, and deleting movies, with JWT-based authentication for secure access.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)


## Project Overview

The Movies API allows you to manage a collection of movies through a simple RESTful interface. The API supports basic CRUD operations (Create, Read, Update, Delete) and includes JWT-based authentication to secure the endpoints.

## Features

- JWT Authentication
- Pagination and filtering for movie listings
- CRUD operations for movies
- Error handling for common issues

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Nest.js](https://nestjs.com/) 
- [PostgreSQL](https://neon.tech/) (local or cloud instance)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/anmolpandey299/CodeIn_task.git
   

2. **Install dependencies:**

    ```bash
    npm install

2. **Set up environment variables:**

    Create a .env file in the root directory and add the following:

    ```bash
    DB_HOST=127.0.0.1
    DB_PORT=3000
    DB_URL=your_postgres_url

- JWT_SECRET: A secret key for signing JWT tokens.
- MONGO_URI: The MongoDB connection string.

4. **Start the server:**

    ```bash
    npm run dev

The API will be accessible at http://localhost:3000.




## API Endpoints

### User Authentication Endpoints

- **POST /auth/register**: Register a new user.
  - **Request Body**:
    - `username`: The user's username.
    - `password`: The user's password.

- **POST /auth/login**: Login an existing user and obtain a JWT token.
  - **Request Body**:
    - `username`: The user's username.
    - `password`: The user's password.
  - **Response**:
    - `200 OK`: Returns a JWT token if login is successful.
    - `401 Unauthorized`: Invalid password.
    - `400 Bad Request`: Incorrect login details.

### movies Endpoints

- **GET /movies**: Retrieve all the movies

- **GET /movies/:id**: Retrieve a single movie by its ID.

- **POST /movies**: Create a new movie.

- **PATCH /movies/:id**: Update an existing movie by its ID.

- **DELETE /movies/:id**: Delete a movie by its ID.

## Usage

- Use an API client like [Postman](https://www.postman.com/) to test the endpoints.
- Include the JWT token in the `Authorization` header as `Bearer <token>` to access the routes.



