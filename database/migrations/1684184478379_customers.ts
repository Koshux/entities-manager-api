import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Customer from 'App/Models/Customer'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    // await Customer.truncate()
    // this.schema.dropTable(this.tableName)
    console.log('Creating customers table', this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('vat_number').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
