import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Customer from 'App/Models/Customer'

export default class extends BaseSeeder {
  public async run () {
    await Customer.createMany([{
      email: 'test@test.com',
      vatNumber: '123456789',
    }, {
      email: 'new@email.com',
      vatNumber: '123456789',
    }, {
      email: 'me@one.com',
      vatNumber: '123456789',
    }, {
      email: 'two@two.com',
      vatNumber: '123456789',
    }, {
      email: 'you@three.com',
      vatNumber: '123456789',
    }])
  }
}
