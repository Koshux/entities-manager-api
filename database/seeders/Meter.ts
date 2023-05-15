import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Meter from 'App/Models/Meter'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    // Create adonisjs database seed for Meter model with all columns except the auto created columns

    // create a new Date object and pass it to the installationDate property

    await Meter.createMany([{
      serialNumber: '123456789',
      siteId: 1,
      installationDate: DateTime.now()
    }, {
      serialNumber: '987654321',
      siteId: 2,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '1234567s89',
      siteId: 3,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '9876asd54321',
      siteId: 4,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '123456fa789',
      siteId: 5,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '98765a4321',
      siteId: 6,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '12345fd6789',
      siteId: 7,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '987654gdc321',
      siteId: 8,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '1234bgj56789',
      siteId: 9,
      installationDate: DateTime.now(),
    }, {
      serialNumber: '9876543lg21',
      siteId: 10,
      installationDate: DateTime.now(),
    }])
  }
}
