// import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Circuit from 'App/Models/Circuit'
import Customer from 'App/Models/Customer'
import { DateTime } from 'luxon'
// import Meter from 'App/Models/Meter'
import Site from 'App/Models/Site'
import Meter from 'App/Models/Meter'
// import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    // await Customer.truncate()
    // await Site.truncate()
    // await Meter.truncate()
    // await Circuit.truncate()
    // await Database.raw('TRUNCATE customers CASCADE')
    // await Database.raw('TRUNCATE sites CASCADE')
    // await Database.raw('TRUNCATE meters CASCADE')
    // await Database.raw('TRUNCATE circuits CASCADE')

    const customer1 = await Customer.create({
      name: 'Test',
      email: 'test@test.com',
      vatNumber: '123456789',
    })

    const sites = await customer1.related('sites').createMany([{
      name: 'Site 1',
      coordinates: '51.5074, 0.1278',
      address: 'London',
      postCode: 'EC1A 1BB'
    }, {
      name: 'Site 2',
      coordinates: '52.4862, 1.8904',
      address: 'Norwich',
      postCode: 'NR1 1AA'
    }, {
      name: 'Site 3',
      coordinates: '53.8008, 1.5491',
      address: 'Leeds',
      postCode: 'LS1 1AA'
    }])

    // const relatedSites1 = customer1.related('sites')
    // console.log('sites', sites)
    // console.log('Customer 1', customer1)
    if (sites.length > 0) {
      // Setup the first two sites with their circuits and meters as per spec.
      await setupSite1(sites[0])
      await setupSite2(sites[1])
    }
  }
}

async function setupSite1 (site) {
  const meter1 = await Meter.create({
    name: 'ASD Meter 1.1',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: DateTime.now(),
    siteId: site.id,
  })

  await Meter.create({
    name: 'ASD Meter 1.2',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: DateTime.now(),
    siteId: site.id
  })

  // const meters = await site.related('meters').createMany([meter1, meter2])

  console.log('YAS')

  const circuit1 = await Circuit.create({
    name: 'Circuit 1.1.1',
    installationDate: DateTime.now(),
    isMain: true,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.2',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.3',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.4',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.4',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.5',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.6',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
  })

  console.log('YAS')
  await Circuit.create({
    name: 'Circuit 1.1.1.1',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter1.id,
    circuitId: circuit1.id
  })
}

async function setupSite2 (site) {
  const meter2 = await Meter.create({
    name: 'Meter 2.1',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: DateTime.now(),
    siteId: site.id
  })

  // Get the related meters to sites1 and set the related circuits to the first meter
  // const relatedMetersToSites1 = await site.related('meters').related('circuits')
  await Circuit.createMany([{
    name: 'Circuit 2.1.1',
    installationDate: DateTime.now(),
    isMain: true,
    meterId: meter2.id
  }, {
    name: 'Circuit 2.1.2',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter2.id
  }])
}
