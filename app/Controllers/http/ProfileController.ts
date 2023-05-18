import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer'

export default class ProfileController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return await Customer.all()
  }

  public async show({ }: HttpContextContract) {
    return await Customer.findOrFail(1)

    // TODO: test pre-load all relations.
    // return Customer.query()
    //   .preload('sites', (query) => {
    //     query.preload('meters', (meterQuery) => {
    //       meterQuery.preload('circuits')
    //     })
    //   })
    //   .firstOrFail()
  }

  public async store({ request, response }: HttpContextContract) {
    const customerSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email()
      ]),
      vatNumber: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: customerSchema })
    const customer: Customer = await Customer.create(payload)

    return await response
      .status(201)
      .json(customer)
  }

  public async update({ request }: HttpContextContract) {
    const customerSchema = schema.create({
      id: schema.number(),
      email: schema.string({ trim: true }, [
        rules.email()
      ]),
      vatNumber: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: customerSchema })
    const circuit: Customer = await Customer.findOrFail(payload.id)

    return await circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const customerSchema = schema.create({
      id: schema.number()
    })

    const payload = await request.validate({ schema: customerSchema })
    const meter: Customer = await Customer.findOrFail(payload.id)

    return await meter.delete()
  }
}
