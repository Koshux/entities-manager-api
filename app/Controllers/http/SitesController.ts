import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
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
    const siteSchema = schema.create({
      coordinates: schema.string({ trim: true }),
      address: schema.string({ trim: true }),
      postCode: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: siteSchema })
    const site: Site = await Site.create(payload)

    return response
      .status(201)
      .json(site)
  }

  public async update({ request }: HttpContextContract) {
    const sitesSchema = schema.create({
      id: schema.number(),
      coordinates: schema.string({ trim: true }),
      address: schema.string({ trim: true }, [
        rules.unique({ table: 'sites', column: 'address' })
      ]),
      postCode: schema.string({ trim: true })
    })

    const payload = await request.validate({ schema: sitesSchema })
    const circuit: Site = await Site.findOrFail(payload.id)

    return circuit
      .merge(payload)
      .save()
  }

  public async destroy({ request }: HttpContextContract) {
    const sitesSchema = schema.create({
      id: schema.number()
    })

    const payload = await request.validate({ schema: sitesSchema })
    const meter: Site = await Site.findOrFail(payload.id)

    return meter.delete()
  }
}
