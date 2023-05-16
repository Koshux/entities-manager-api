import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
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
    const circuitSchema = schema.create({
      installationDate: schema.date({ format: 'yyyy-MM-dd' }, [
        rules.unique({ table: 'circuits', column: 'installation_date' })
      ]),
      isMain: schema.boolean()
    })

    const payload = await request.validate({ schema: circuitSchema })
    const circuit: Circuit = await Circuit.create(payload)

    return response
      .status(201)
      .json(circuit)
  }

  public async update({ request }: HttpContextContract) {
    const circuitSchema = schema.create({
      id: schema.number(),
      installationDate: schema.date({ format: 'yyyy-MM-dd' }, [
        rules.unique({ table: 'circuits', column: 'installation_date' })
      ]),
      isMain: schema.boolean()
    })

    const payload = await request.validate({ schema: circuitSchema })
    const circuit: Circuit = await Circuit.findOrFail(payload.id)

    return circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const circuitsSchema = schema.create({
      id: schema.number()
    })

    const payload = await request.validate({ schema: circuitsSchema })
    const meter: Circuit = await Circuit.findOrFail(payload.id)

    return meter.delete()
  }
}
