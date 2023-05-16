# entities-manager-api
Dockerized API using ArdonisJS to manage an entities ecosystem, including customers, sites, meters and circuits

## TODO notes
- API:
DONE - Connect to Postgres
DONE - Create schema
	- Customers
	- Sites
	- Meters
	- Circuits
DONE - Define Models to represent the schema
DONE - Define Controllers to implement the business logic for the routes
DONE - Define routes for entire schema
	- GET, POST, PATCH, DELETE on all models
TODO:
- Make use of updateOrCreate to make use of the "UPDATE lock"
- Fix seeder inserts (relationships issue)
- Add missing relationships:
	- site to circuit
	- circuit to circuit
- Implement basic auth
	- register (POST /customers)
	- login (GET /customers/:id)
- Make use of preload to pre-fetch relationship data when requesting /profile/1
- Make use of factories to bulk create circuits/meters.

UI:
