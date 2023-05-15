import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Site from 'App/Models/Site'

export default class SitesController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return Site.all()
  }

  public async show({ }: HttpContextContract) {
    return Site.findOrFail(1)
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    if (!body.coordinates) {
      return response
        .status(400)
        .json({ error: 'coordinates is required' })
    }

    if (!body.address) {
      return response
        .status(400)
        .json({ error: 'address is required' })
    }

    if (!body.postCode) {
      return response
        .status(400)
        .json({ error: 'postCode is required' })
    }

    const site: Site = await Site.create(body)

    return response
      .status(201)
      .json(site)
  }

  public async update({ params, request, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const body = request.body()
    const site: Site = await Site.findOrFail(params.id)

    if (body.coordinates) {
      site.coordinates = body.coordinates
    }

    if (body.address) {
      site.address = body.address
    }

    return site
      .merge(body)
      .save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const site: Site = await Site.findOrFail(params.id)

    return site.delete()
  }
}
