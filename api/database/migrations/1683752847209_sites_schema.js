'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SitesSchema extends Schema {
  up () {
    this.create('sites', (table) => {
      table.increments()
      table.string('coordinates').notNullable()
      table.string('address').notNullable()
      table.string('post_code').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sites')
  }
}

module.exports = SitesSchema
