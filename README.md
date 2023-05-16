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

    <!-- // const customer2 = await Customer.create({
    //   name: 'New',
    //   email: 'new@email.com',
    //   vatNumber: '123456789',
    // })

    // await customer2.related('sites').createMany([{
    //   coordinates: '53.8008, 1.5491',
    //   address: 'Leeds',
    //   postCode: 'LS1 1AA',
    // }, {
    //   coordinates: '53.4808, 2.2426',
    //   address: 'Manchester',
    //   postCode: 'M1 1AA',
    // }])

    // const customer3 = await Customer.create({
    //   name: 'Me',
    //   email: 'me@one.com',
    //   vatNumber: '123456789',
    // })

    // await customer3.related('sites').createMany([{
    //   coordinates: '53.4084, 2.9916',
    //   address: 'Liverpool',
    //   postCode: 'L1 1AA',
    // },
    // {
    //   coordinates: '52.9548, 1.1563',
    //   address: 'Nottingham',
    //   postCode: 'NG1 1AA',
    // }])

    // const customer4 = await Customer.create({
    //   name: 'You',
    //   email: 'two@two.com',
    //   vatNumber: '123456789',
    // })

    // await customer4.related('sites').createMany([{
    //   coordinates: '52.6309, 1.2974',
    //   address: 'Norwich',
    //   postCode: 'NR1 1AA',
    // },
    // {
    //   coordinates: '52.4862, 1.8904',
    //   address: 'Birmingham',
    //   postCode: 'B1 1AA',
    // }])

    // const customer5 = await Customer.create({
    //   name: 'Three',
    //   email: 'you@three.com',
    //   vatNumber: '123456789',
    // })

    // await customer5.related('sites').createMany([{
    //   coordinates: '52.4862, 1.8904',
    //   address: 'Kings Lynn',
    //   postCode: 'PE30 1AA',
    // }, {
    //   coordinates: '52.4862, 1.8904',
    //   address: 'Brixton',
    //   postCode: 'SW2 1AA',
    // }]) -->


      <!-- // const relatedMetersToSites1 = await relatedSites1[0].$getRelated('meters')
      // await relatedMetersToSites1[0].$setRelated()

      const relatedCircuitsToSites1 = await relatedSites1[0].$getRelated('circuits')

      relatedSites1[1].$setRelated('meters', [{
        name: 'Test 3',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 4',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])

      const relatedCircuits1 = relatedSites1[0].$getRelated('circuits')
      if (relatedCircuits1 != null) {
        relatedCircuits1[0].$setRelated('sites')
    }

    const relatedSites2 = customer2.$getRelated('sites')
    if (relatedSites2 != null) {
      relatedSites2[0].$setRelated('meters', [{
        name: 'Test 1',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 2',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])

      relatedSites2[1].$setRelated('meters', [{
        name: 'Test 3',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 4',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])
    }

    const relatedSites3 = customer3.$getRelated('sites')
    if (relatedSites3 != null) {
      relatedSites3[0].$setRelated('meters', [{
        name: 'Test 1',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 2',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])

      relatedSites3[1].$setRelated('meters', [{
        name: 'Test 3',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 4',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])
    }

    const relatedSites4 = customer4.$getRelated('sites')
    if (relatedSites4 != null) {
      relatedSites4[0].$setRelated('meters', [{
        name: 'Test 1',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 2',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])

      relatedSites4[1].$setRelated('meters', [{
        name: 'Test 3',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 4',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])
    }

    const relatedSites5 = customer5.$getRelated('sites')
    if (relatedSites5 != null) {
      relatedSites5[0].$setRelated('meters', [{
        name: 'Test 1',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 2',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }])

      relatedSites5[1].$setRelated('meters', [{
        name: 'Test 3',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }, {
        name: 'Test 4',
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: new Date(),
      }]) -->
UI:
