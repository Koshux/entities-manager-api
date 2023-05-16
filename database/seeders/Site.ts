import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Site from 'App/Models/Site'

export default class extends BaseSeeder {
  public async run () {
    await Site.createMany([{
      coordinates: '51.5074, 0.1278',
      address: 'London',
      postCode: 'EC1A 1BB',
      customerId: 1,
    }, {
      coordinates: '52.4862, 1.8904',
      address: 'Norwich',
      postCode: 'NR1 1AA',
      customerId: 1,
    }, {
      coordinates: '53.8008, 1.5491',
      address: 'Leeds',
      postCode: 'LS1 1AA',
      customerId: 2,
    }, {
      coordinates: '53.4808, 2.2426',
      address: 'Manchester',
      postCode: 'M1 1AA',
      customerId: 2,
    }, {
      coordinates: '53.4084, 2.9916',
      address: 'Liverpool',
      postCode: 'L1 1AA',
      customerId: 3,
    }, {
      coordinates: '52.9548, 1.1563',
      address: 'Nottingham',
      postCode: 'NG1 1AA',
      customerId: 4,
    }, {
      coordinates: '52.6309, 1.2974',
      address: 'Norwich',
      postCode: 'NR1 1AA',
      customerId: 2,
    }, {
      coordinates: '52.4862, 1.8904',
      address: 'Birmingham',
      postCode: 'B1 1AA',
      customerId: 4,
    }, {
      coordinates: '52.4862, 1.8904',
      address: 'Kings Lynn',
      postCode: 'PE30 1AA',
      customerId: 3,
    }, {
      coordinates: '52.4862, 1.8904',
      address: 'Brixton',
      postCode: 'SW2 1AA',
      customerId: 5,
    }])
  }
}
