'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MetersSchema extends Schema {
  up () {
    this.create('meters', (table) => {
      table.increments()
      table.string('serial_number').notNullable()
      table.date('installation_date').notNullable()
      // Meters -
      // unique serial number (string)
      // installation_date (date)
      table.timestamps()
    })
  }

  down () {
    this.drop('meters')
  }
}

module.exports = MetersSchema
