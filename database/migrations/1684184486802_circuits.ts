import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export class Circuits extends BaseSchema {
  protected tableName = 'circuits'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
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
