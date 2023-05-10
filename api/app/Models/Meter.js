'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meter extends Model {
  circuits () {
    return this.hasMany('App/Models/Circuit')
  }
}

module.exports = Meter
