import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DateTime } from 'luxon'
import Circuit from 'App/Models/Circuit'
import Customer from 'App/Models/Customer'
import Meter from 'App/Models/Meter'
import Site from 'App/Models/Site'

export default class extends BaseSeeder {
  public async run () {
    const customer1: Customer = await Customer.create({
      name: 'Test',
      email: 'test@test.com',
      vatNumber: '123456789',
    })

    const sites: Site[] = await customer1.related('sites').createMany([{
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

    // Setup the first two sites with their circuits and meters as per spec.
    if (sites.length > 0) {
      await setupSite1(sites[0])
      await setupSite2(sites[1])
    }
  }
}

async function setupSite1 (site: Site): Promise<void> {
  const meter1 = await setupSite1Meters(site)
  const circuit1 = await setupMeter1Circuits(meter1)
  await setupMeter1Circuit1Circuit(meter1, circuit1)
}

async function setupSite2 (site: Site): Promise<void> {
  const meter2 = await Meter.create({
    name: 'Meter 2.1',
    serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    installationDate: DateTime.now(),
    siteId: site.id
  })

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

async function setupSite1Meters (site: Site): Promise<Meter> {
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

  // Only return the first meter since that is the only one with circuits linked to it.
  return meter1
}

async function setupMeter1Circuits (meter: Meter): Promise<Circuit> {
  const circuit1 = await Circuit.create({
    name: 'Circuit 1.1.1',
    installationDate: DateTime.now(),
    isMain: true,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.2',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.3',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.4',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.4',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.5',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  await Circuit.create({
    name: 'Circuit 1.1.6',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
  })

  return circuit1
}
async function setupMeter1Circuit1Circuit (meter: Meter, circuit: Circuit): Promise<Circuit> {
  return await Circuit.create({
    name: 'Circuit 1.1.1.1',
    installationDate: DateTime.now(),
    isMain: false,
    meterId: meter.id,
    circuitId: circuit.id
  })
}
