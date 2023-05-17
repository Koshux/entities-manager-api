import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Meters extends BaseSchema {
  protected tableName = 'meters'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('site_id')
        .unsigned()
        .references('sites.id')
        // .inTable('sites')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()

      table.string('name').notNullable()
      table.string('serial_number').unique().notNullable()
      table.timestamp('installation_date').notNullable()

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
