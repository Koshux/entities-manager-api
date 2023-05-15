import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MetersController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return 'GET: MetersController.index'
  }

  public async show({ }: HttpContextContract) {
    // I would like to return a Profile by id
    return 'GET: MetersController.show'
  }

  public async store({ request }: HttpContextContract) {
    // I would like to create a Profile
    return {
      message: 'POST: MetersController.store',
      body: request.body()
    }
  }

  public async update({ params }: HttpContextContract) {
    // I would like to update a Profile by id
    return 'PATCH: MetersController.update' + params.id
  }

  public async destroy({ params }: HttpContextContract) {
    // I would like to delete a Profile by id
    return 'DELETE: MetersController.destroy' + params.id
  }
}
