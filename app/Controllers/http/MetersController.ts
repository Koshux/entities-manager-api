import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
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
    const meterSchema = schema.create({
      installationDate: schema.date({ format: 'yyyy-MM-dd' }),
    })

    const payload = await request.validate({ schema: meterSchema })
    const meter: Meter = await Meter.create(payload)

    return response
      .status(201)
      .json(meter)
  }

  public async update({ request }: HttpContextContract) {
    const metersSchema = schema.create({
      serialNumber: schema.string({ trim: true }),
      installationDate: schema.date({ format: 'yyyy-MM-dd' }),
    })

    const payload = await request.validate({ schema: metersSchema })
    const circuit: Meter = await Meter.findOrFail(payload.serialNumber)

    return circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const metersSchema = schema.create({
      serialNumber: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: metersSchema })
    const meter: Meter = await Meter.findOrFail(payload.serialNumber)

    return meter.delete()
  }
}
