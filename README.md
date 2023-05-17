# entities-manager-api

This README file provides a detailed description of a fully-fledged CRUD API built using the AdonisJS framework. The API utilizes a Postgres database, which is running within a Docker container. The database schema is created using AdonisJS migrations, and the API incorporates various relationships among the entities.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Database Migrations](#database-migrations)
- [Database Seeders](#database-seeders)
- [Testing the API](#testing-the-api)
- [Relationships](#relationships)
- [Assumptions](#assumptions)

## Requirements
To successfully run this project, ensure that you have the following dependencies installed:
- Node.js
- NPM (Node Package Manager)
- Docker (for running the Postgres database)

## Installation
Follow the steps below to set up the project:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.

## Database Configuration
To configure the Postgres database running within a Docker container, perform the following steps:

1. Install Docker on your system if you haven't already.
2. Pull the Postgres Docker image by running the following command:`docker pull postgres`
3. Start a Docker container using the Postgres image:
`docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`
Make sure to replace `mysecretpassword` with a secure password of your choice.
4. Create a new Postgres database for the project. You can use a tool like [Postico](https://eggerapps.at/postico/) or any other PostgreSQL client.
5. Update the database configuration in the `.env` file with the appropriate credentials.

## Database Migrations
AdonisJS provides a migration feature to manage database schema changes. If you make any updates to the database schema or add new migrations, follow these steps to run the migration commands:

1. Ensure that the Docker container with the Postgres database is running.
2. Open a terminal or command prompt in the project directory.
3. Run the following command to create a new migration file:
`node ace make:migration <migration-name>`
Replace `<migration-name>` with a descriptive name for your migration. This command will create a new migration file in the `database/migrations` directory.
4. In the newly created migration file, define the schema changes using AdonisJS migration methods. Refer to the AdonisJS documentation for more details on writing migrations.
5. Once your migration is ready, run the following command to execute the migrations and update the database schema:`node ace migration:run`

This command will apply any pending migrations and update the database schema accordingly.

Remember to always run the migration command whenever you make changes to the database schema to ensure consistency between your codebase and the database.

## Database Seeders

To populate the database with initial data, the project includes seeders that insert dummy data or default records into the database. Follow these steps to run the database seeder command:

1. Ensure that the Docker container with the Postgres database is running.
2. Open a terminal or command prompt in the project directory.
3. Run the following command to run the database seeder: `node ace db:seed`
This command will execute the defined seeders and populate the database with initial data.
4. Once the seeder command has successfully executed, you can proceed to execute the request collection.

Running the database seeder command is typically useful when you want to have pre-populated data for testing and development purposes. It helps to create a consistent state in the database, ensuring that you have sample records to work with while interacting with the API.

Please note that the seeders provided with the project are specific to the data structure and requirements of the application. If you need to modify or customize the initial data, you can explore and update the seeders located in the appropriate project directory.

Remember to run the database seeder command whenever you need to refresh the data or set up the database with the initial records.

## Relationships
The API incorporates the following relationships:

- Customer may have many sites.
- Sites may have many meters.
- Sites may have many circuits.
- Meters may have many circuits.
- Circuits may also have other circuits.

These relationships define the associations between entities in the API. By understanding these relationships, you can efficiently navigate and perform operations on related data. When retrieving or modifying data, consider the relationships between entities to ensure data consistency and integrity.

For more details on how these relationships are implemented and utilized in the API, refer to the API documentation or explore the codebase to understand the data models and their associations.

## Running the API
To start the AdonisJS server and run the API, use the following command:
```bash
npm run start
```
The server will start running on `http://localhost:3333`.

## API Endpoints

The API provides the following endpoints:

### Customers

- **GET /customers**: Get all customers.
- **GET /customers/:id**: Get a specific customer by ID.
- **POST /customers**: Create a new customer.
- **PUT /customers/:id**: Update an existing customer.
- **DELETE /customers/:id**: Delete a customer.

### Sites

- **GET /sites**: Get all sites.
- **GET /sites/:id**: Get a specific site by ID.
- **POST /sites**: Create a new site.
- **PUT /sites/:id**: Update an existing site.
- **DELETE /sites/:id**: Delete a site.

### Meters

- **GET /meters**: Get all meters.
- **GET /meters/:id**: Get a specific meter by ID.
- **POST /meters**: Create a new meter.
- **PUT /meters/:id**: Update an existing meter.
- **DELETE /meters/:id**: Delete a meter.

### Circuits

- **GET /circuits**: Get all circuits.
- **GET /circuits/:id**: Get a specific circuit by ID.
- **POST /circuits**: Create a new circuit.
- **PUT /circuits/:id**: Update an existing circuit.
- **DELETE /circuits/:id**: Delete a circuit.

These are the primary endpoints exposed by the API for performing CRUD operations on customers, sites, meters, and circuits. Each endpoint supports different HTTP methods (GET, POST, PUT, DELETE) to interact with the corresponding resources.

Please refer to the API documentation or explore the codebase for more details on the request and response structures, query parameters, and authentication/authorization requirements for each endpoint.

## Testing the API
You can use either Thunder Client or Postman to test the API endpoints and interact with the AdonisJS CRUD API.

### Using Thunder Client
1. Install the Thunder Client extension in VSCode if you haven't already.
2. Open the Thunder Client extension in VSCode.
3. Import the provided Thunder Client collection file that includes the API endpoints.
4. Update the collection variables or environment variables as necessary to match your setup (e.g., API base URL).
5. Click on the individual requests within the collection to send HTTP requests to the API and view the responses.

### Using Postman
1. Install Postman on your machine if you haven't already.
2. Launch Postman.
3. Import the provided Postman collection file that includes the API endpoints.
4. Update the collection variables or environment variables as necessary to match your setup (e.g., API base URL).
5. Click on the individual requests within the collection to send HTTP requests to the API and view the responses.

Both Thunder Client and Postman provide user-friendly interfaces to execute requests, inspect responses, and test different API functionalities. Choose the tool that you are most comfortable with or prefer for API testing.

Please note that you may need to update the request URLs, headers, and authentication settings in Thunder Client or Postman to match your specific API configuration and environment.

## Assumptions

- The project is built using AdonisJS, a Node.js web framework.
- The Postgres database is used, and the database configuration is appropriately set in the `.env` file.
- The database schema is created using AdonisJS migrations, specifically by running the `node ace migration:run` command.
- To update the database schema with any new migrations, follow the instructions provided in the [Database Migrations](#database-migrations) section.
- To populate the database with initial data, run the database seeder command using `node ace db:seed` before executing the request collection.
- The CRUD operations for customers, sites, meters, and circuits are implemented and available through the provided API endpoints.
- The API follows RESTful conventions for resource management.
- The API does not incorporate authentication or authorization mechanisms.
- The API does not include additional validation or error handling details, focusing primarily on the core CRUD functionality.

It is recommended to review the codebase, API documentation, and any additional project-specific requirements to get a comprehensive understanding of the project's functionality and assumptions.

If you have any further questions or need clarification on any assumptions, feel free to reach out for assistance.

Feel free to modify or expand upon this README as necessary to suit your specific project requirements.

<!-- convert the entirety of the text above to be a readme.md for my github project  -->
