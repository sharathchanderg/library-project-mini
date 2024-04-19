# Library Portal

This is a library portal web application built using Node.js, EJS (Embedded JavaScript), and MySQL. The application allows users to view information about the library, browse books by category, and view and add articles.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Database](#database)
- [License](#license)

## Features

- **About Us**: View and edit information about the library.
- **Books**: Browse books by category and add new books to the collection.
- **Articles**: View and add new articles.

## Prerequisites

To run the application, you need the following:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended).
- [MySQL](https://www.mysql.com/) database server.
- An internet browser for accessing the web application.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/library-portal.git
    cd library-portal
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MySQL database:

    - Create a new MySQL database (e.g., `library_portal`).
    - Update the database connection settings in `models/db.js` with your MySQL database host, username, password, and database name.

        ```javascript
        // models/db.js
        const dbConfig = {
            host: 'localhost',
            user: 'your-username',
            password: 'your-password',
            database: 'your-database',
        };
        ```

## Running the Application

To run the application:

1. Start the application:

    ```bash
    node app.js
    ```

2. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Database

The application uses a MySQL database. When you start the application, it automatically checks for the necessary tables and creates them if they do not exist. The tables used in the application are:

- `books`: Holds information about the library's books.
- `articles`: Holds information about articles.
- `about`: Holds information about the library for the "About Us" section.

## License

This project is licensed under the MIT License.

---

Thank you for using the Library Portal application! If you encounter any issues or have any questions, please feel free to reach out.
