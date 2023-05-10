'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeterSchema extends Schema {
  up () {
    this.create('meters', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('meters')
  }
}

module.exports = MeterSchema
