import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Circuit from 'App/Models/Circuit'

export default class Circuits extends BaseSchema {
  protected tableName = 'circuits'

  public async up () {
    // await Circuit.truncate()
    console.log('Creating circuits table', this.tableName)
    // this.schema.dropTable(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('meter_id')
        .unsigned()
        .references('meters.id')
        // .inTable('meters')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()

      table
        .integer('circuit_id')
        .unsigned()
        .references('circuits.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .nullable()
        // .notNullable()

      table.string('name').notNullable()
      table.timestamp('installation_date').notNullable()
      table.boolean('is_main').notNullable()

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
