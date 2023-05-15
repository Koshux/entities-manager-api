import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class ProfileController {
  public async index({ }: HttpContextContract) {
    // I would like to return all Profiles
    return Customer.all()
  }

  public async show({ }: HttpContextContract) {
    return Customer.findOrFail(1)

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
    const body = request.body()

    if (!body.email) {
      return response
        .status(400)
        .json({ error: 'email is required' })
    }

    if (!body.vatNumber) {
      return response
        .status(400)
        .json({ error: 'vatNumber is required' })
    }

    const customer: Customer = await Customer.create(body)

    return response
      .status(201)
      .json(customer)
  }

  public async update({ params, request, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const body = request.body()
    const customer: Customer = await Customer.findOrFail(params.id)

    if (body.email) {
      customer.email = body.email
    }

    if (body.vatNumber) {
      customer.vatNumber = body.vatNumber
    }

    return customer
      .merge(body)
      .save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    if (!params.id) {
      return response
        .status(400)
        .json({ error: 'id is required' })
    }

    const customer: Customer = await Customer.findOrFail(params.id)
    return customer.delete()
  }
}
