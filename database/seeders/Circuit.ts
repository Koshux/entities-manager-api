import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Circuit from 'App/Models/Circuit'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    for (let i = 0; i < 50; i++) {
      await Circuit.create({
        serialNumber: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        installationDate: DateTime.now(),
        isMain: Boolean(Math.round(Math.random())),
      })
    }

  }
}
