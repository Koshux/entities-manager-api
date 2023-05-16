import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Meter from 'App/Models/Meter'

export default class MetersController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return await Meter.all()
  }

  public async show({ }: HttpContextContract) {
    return await Meter.findOrFail(1)
  }

  public async store({ request, response }: HttpContextContract) {
    const meterSchema = schema.create({
      serialNumber: schema.string({ trim: true }, [
        rules.unique({ table: 'meters', column: 'serial_number' })
      ]),
      installationDate: schema.date({ format: 'yyyy-MM-dd' }),
    })

    const payload = await request.validate({ schema: meterSchema })
    const meter: Meter = await Meter.create(payload)

    return await response
      .status(201)
      .json(meter)
  }

  public async update({ request }: HttpContextContract) {
    const metersSchema = schema.create({
      serialNumber: schema.string({ trim: true }),
      installationDate: schema.date({ format: 'yyyy-MM-dd' }, [
        rules.unique({ table: 'meters', column: 'installation_date' })
      ]),
    })

    const payload = await request.validate({ schema: metersSchema })
    const circuit: Meter = await Meter.findOrFail(payload.serialNumber)

    return await circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const metersSchema = schema.create({
      serialNumber: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: metersSchema })
    const meter: Meter = await Meter.findOrFail(payload.serialNumber)

    return await meter.delete()
  }
}
