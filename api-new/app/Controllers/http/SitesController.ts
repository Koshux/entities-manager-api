import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SitesController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return { hello: 'SitesController' }
  }

  public async show({ }: HttpContextContract) {
    // I would like to return a Profile by id
  }

  public async store({ }: HttpContextContract) {
    // I would like to create a Profile
  }

  public async update({ }: HttpContextContract) {
    // I would like to update a Profile by id
  }

  public async destroy({ }: HttpContextContract) {
    // I would like to delete a Profile by id
  }
}
