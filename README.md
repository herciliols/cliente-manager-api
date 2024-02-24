# Client Manager App 🚀

Welcome to the Client Manager App! This is a backend developed in Express.js for a client management application.

## Description

The Client Manager App is a Node.js application that provides a basic structure for managing clients. It uses the Express.js framework to create routes and interact with a MySQL database. User authentication is implemented with the generation of JWT tokens to secure sensitive routes.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/herciliols/cliente-manager-app.git
    ```

2. **Install dependencies:**

    ```bash
    cd cliente-manager-app
    npm install
    ```

3. **Import the database dump:**

    Make sure you have the database dump located at `.db/u331719236_clientesdb.sql`. Import it into your MySQL database.

4. **Configure environment variables:**

    Create a `.env` file in the project root and add the following variables:

    ```plaintext
    DB_HOST=your_mysql_host
    DB_PORT=mysql_port
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_DATABASE=your_mysql_database
    ```

5. **Start the server:**

    ```bash
    npm start
    ```

    The server will be available at [http://localhost:3000](http://localhost:3000).

## Routes

- `POST /auth/login`: Route for user authentication and obtaining JWT token.
- `GET /dashboard`: Protected route, requires authentication with JWT token, whose session currently expires after 10 minutes.

## Main Technologies

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)

## Author

Hercílio Luz Simões

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more details about the application, visit [https://github.com/herciliols/cliente-manager-app](https://github.com/herciliols/cliente-manager-app). 🌟
