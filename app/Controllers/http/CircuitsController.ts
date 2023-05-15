import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Circuit from 'App/Models/Circuit'

export default class CircuitsController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return Circuit.all()
  }

  public async show({ }: HttpContextContract) {
    return Circuit.findOrFail(1)
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    if (!body.installationDate) {
      return response
        .status(400)
        .json({ error: 'installationDate is required' })
    }

    if (body.isMain == null || body.isMain == '') {
      return response
        .status(400)
        .json({ error: 'isMain is required' })
    }

    const circuit: Circuit = await Circuit.create(body)

    return response
      .status(201)
      .json(circuit)
  }

  public async update({ params, request, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const body  = request.body()
    const circuit: Circuit = await Circuit.findOrFail(params.id)

    if (body.installationDate) {
      circuit.installationDate = body.installationDate
    }

    if (body.isMain != null && body.isMain != '') {
      circuit.isMain = body.isMain
    }

    return circuit
      .merge(body)
      .save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const circuit: Circuit = await Circuit.findOrFail(params.id)
    return circuit.delete()
  }
}
