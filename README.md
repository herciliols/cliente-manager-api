# Customer Manager API 🚀

This is a backend developed in TypeScript and Express.js for a customer management application.

## Description

The Customer Manager API is a Node.js application that provides a robust structure for managing customers. It utilizes the Express.js framework to create routes and interacts with a MySQL database. User authentication is implemented with the generation of JWT tokens to secure sensitive routes.

## Installation with Docker Compose

1. **Clone the repository:**

    ```bash
    git clone https://github.com/herciliols/cliente-manager-api.git
    ```

2. **Run Docker Compose:**

    ```bash
    docker-compose up --build
    ```

    This command will build the application and related services (Node.js, MySQL, PhpMyAdmin) as configured in the `docker-compose.yml` file.

3. **Test the endpoints:**

    API endpoints are tested using Jest. Execute the following command to run the tests:

    ```bash
    docker-compose exec node_app npx jest
    ```

4. **Explore API documentation:**

    The API is fully documented using Swagger. After running the application, visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to explore and interact with the endpoints. Note that you need to obtain a JWT token through the endpoint `POST /login` to access the remaining endpoints.

5. **Access PhpMyAdmin:**

    To navigate the database using PhpMyAdmin, go to [http://localhost:8080/](http://localhost:8080/).

## Main Technologies

- Node.js
- Express.js
- TypeScript
- MySQL
- Docker
- JWT (JSON Web Token)
- Jest (for testing)

## Author

Hercílio Luz Simões

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more details about the application, visit [https://github.com/herciliols/cliente-manager-api](https://github.com/herciliols/cliente-manager-api). 🌟
