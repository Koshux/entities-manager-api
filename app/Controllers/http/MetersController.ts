import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Meter from 'App/Models/Meter'

export default class MetersController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return Meter.all()
  }

  public async show({ }: HttpContextContract) {
    return Meter.findOrFail(1)
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    if (!body.installationDate) {
      return response
        .status(400)
        .json({ error: 'installationDate is required' })
    }

    const meter: Meter = await Meter.create(body)

    return response
      .status(201)
      .json(meter)
  }

  public async update({ params, request, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const body  = request.body()
    const meter: Meter = await Meter.findOrFail(params.id)

    if (body.installationDate) {
      meter.installationDate = body.installationDate
    }

    return meter
      .merge(body)
      .save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const meter: Meter = await Meter.findOrFail(params.id)

    return meter.delete()
  }
}
