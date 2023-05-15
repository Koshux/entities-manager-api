import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sites extends BaseSchema {
  protected tableName = 'sites'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()

      table.string('coordinates').notNullable()
      table.string('address').notNullable()
      table.string('post_code').notNullable()

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
