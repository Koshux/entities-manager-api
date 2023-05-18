import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Circuit from 'App/Models/Circuit'

export default class CircuitsController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return await Circuit.all()
  }

  public async show({ }: HttpContextContract) {
    return await Circuit.findOrFail(1)
  }

  public async store({ request, response }: HttpContextContract) {
    const circuitSchema = schema.create({
      circuitId: schema.number.nullable(),
      meterId: schema.number(),
      name: schema.string(),
      installationDate: schema.date(),
      isMain: schema.boolean()
    })

    const payload = await request.validate({ schema: circuitSchema })
    console.log('payload', payload)
    const circuit: Circuit = await Circuit.create(payload)

    return await response
      .status(201)
      .json(circuit)
  }

  public async update({ request }: HttpContextContract) {
    const circuitSchema = schema.create({
      id: schema.number(),
      installationDate: schema.date(),
      isMain: schema.boolean()
    })

    const payload = await request.validate({ schema: circuitSchema })
    const circuit: Circuit = await Circuit.findOrFail(payload.id)

    return await circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const circuitsSchema = schema.create({
      id: schema.number()
    })

    const payload = await request.validate({ schema: circuitsSchema })
    const meter: Circuit = await Circuit.findOrFail(payload.id)

    return await meter.delete()
  }
}
