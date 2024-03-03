# Cliente Manager API 🚀

This is a backend developed in TypeScript and Express.js for a customer management application.

## Description

The Cliente Manager API is a Node.js application that provides a robust structure for managing customers. It utilizes the Express.js framework to create routes and interacts with a MySQL database. User authentication is implemented with the generation of JWT tokens to secure sensitive routes.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/herciliols/cliente-manager-api.git
    ```

2. **Install dependencies:**

    ```bash
    cd cliente-manager-api
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

6. **Test the endpoints:**

    The API endpoints are tested using Jest. Run the following command to execute the tests:

    ```bash
    npm test
    ```

7. **Explore API documentation:**

    The API is fully documented using Swagger. After running the application, visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to explore and interact with the endpoints. Note that you need to obtain a JWT token through the endpoint `POST /login` to access the remaining endpoints.

## Main Technologies

- Node.js
- Express.js
- TypeScript
- MySQL
- JWT (JSON Web Token)
- Jest (for testing)

## Author

Hercílio Luz Simões

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more details about the application, visit [https://github.com/herciliols/cliente-manager-api](https://github.com/herciliols/cliente-manager-api). 🌟"
