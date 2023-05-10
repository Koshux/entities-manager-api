'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CircuitSchema extends Schema {
  up () {
    this.create('circuits', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('circuits')
  }
}

module.exports = CircuitSchema
