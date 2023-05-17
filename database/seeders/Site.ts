import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Circuit from 'App/Models/Circuit'
import Customer from 'App/Models/Customer'
import Meter from 'App/Models/Meter'
import Site from 'App/Models/Site'

export default class extends BaseSeeder {
  public async run () {
    await Customer.truncate()
    await Site.truncate()
    await Meter.truncate()
    await Circuit.truncate()

    const customer1 = await Customer.create({
      // name: 'Test',
      email: 'test@test.com',
      vatNumber: '123456789',
    })

    await customer1.related('sites').createMany([{
      name: 'Site 1',
      coordinates: '51.5074, 0.1278',
      address: 'London',
      postCode: 'EC1A 1BB',
    }, {
      name: 'Site 2',
      coordinates: '52.4862, 1.8904',
      address: 'Norwich',
      postCode: 'NR1 1AA',
    }, {
      name: 'Site 3',
      coordinates: '53.8008, 1.5491',
      address: 'Leeds',
      postCode: 'LS1 1AA',
    }])

    const relatedSites1 = customer1.$getRelated('sites')
    if (relatedSites1 != null) {
      // Setup the first two sites with their circuits and meters as per spec.
      setupSite1(relatedSites1[0])
      setupSite2(relatedSites1[1])
    }
  }
}

async function setupSite1 (site) {
  await site[0].$getRelated('meters').createMany([{
    name: 'Meter 1.1',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: new Date(),
  }, {
    name: 'Meter 1.2',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: new Date(),
  }])

  // Get the related meters to sites1 and set the related circuits to the first meter
  const relatedMetersToSites1 = await site[0].$getRelated('meters')
  await relatedMetersToSites1[0].$setRelated('circuits', [{
    name: 'Circuit 1.1.1',
    installationDate: new Date(),
    isMain: true,
  }, {
    name: 'Circuit 1.1.2',
    installationDate: new Date(),
    isMain: false,
  }, {
    name: 'Circuit 1.1.3',
    installationDate: new Date(),
    isMain: false,
  }, {
    name: 'Circuit 1.1.4',
    installationDate: new Date(),
    isMain: false,
  }, {
    name: 'Circuit 1.1.5',
    installationDate: new Date(),
    isMain: false,
  }, {
    name: 'Circuit 1.1.6',
    installationDate: new Date(),
    isMain: false,
  }])

  // Get the related circuits to the first meter and create a new circuit as a child to the Circuit 1.1.1
  const relatedCircuitsToMeters1 = await relatedMetersToSites1[0].$getRelated('circuits')
  await relatedCircuitsToMeters1[0].$getRelated('circuits').create({
    name: 'Circuit 1.1.1.1',
    installationDate: new Date(),
    isMain: false,
  })
}

async function setupSite2 (site) {
  await site[0].$getRelated('meters').create({
    name: 'Meter 2.1',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: new Date(),
  })

  // Get the related meters to sites1 and set the related circuits to the first meter
  const relatedMetersToSites1 = await site[0].$getRelated('meters')
  await relatedMetersToSites1[0].$setRelated('circuits', [{
    name: 'Circuit 2.1.1',
    installationDate: new Date(),
    isMain: true,
  }, {
    name: 'Circuit 2.1.2',
    installationDate: new Date(),
    isMain: false,
  }])
}
