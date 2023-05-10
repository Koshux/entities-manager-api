'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CircuitsSchema extends Schema {
  up () {
    this.create('circuits', (table) => {
      table.increments()
      table.date('installation_date').notNullable()
      table.boolean('is_main').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('circuits')
  }
}

module.exports = CircuitsSchema
