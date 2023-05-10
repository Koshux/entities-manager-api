'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Site extends Model {
  meters () {
    return this.hasMany('App/Models/Meter')
  }
}

module.exports = Site
