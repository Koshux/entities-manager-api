'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {
  sites () {
    return this.hasMany('App/Models/Site')
  }
}

module.exports = Customer
