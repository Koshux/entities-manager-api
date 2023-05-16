import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Circuits extends BaseSchema {
  protected tableName = 'circuits'

  public async up () {
    // if (await this.schema.hasTable(this.tableName)) {
    //   return
    // }
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
        .notNullable()

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
