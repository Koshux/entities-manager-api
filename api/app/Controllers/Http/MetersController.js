'use strict'

const Meter = use('App/Models/Meter')

class MetersController {
  async index({ response }) {
    // Retrieve all meters
    const meters = await Meter.all()

    return response.json(meters)
  }

  async show({ params, response }) {
    const { id } = params

    // Retrieve a specific meter by ID
    const meter = await Meter.find(id)

    if (!meter) {
      return response
        .status(404)
        .json({ message: 'Meter not found' })
    }

    return response.json(meter)
  }

  async store({ request, response }) {
    const { serial_number, installation_date } = request.post()

    // Create a new meter
    const meter = new Meter()
    meter.serial_number = serial_number
    meter.installation_date = installation_date
    await meter.save()

    return response
      .status(201)
      .json(meter)
  }

  async update({ params, request, response }) {
    const { id } = params

    // Find the meter to update
    const meter = await Meter.find(id)

    if (!meter) {
      return response
        .status(404)
        .json({ message: 'Meter not found' })
    }

    // Update meter details
    const { serial_number, installation_date } = request.post()
    meter.serial_number = serial_number
    meter.installation_date = installation_date
    await meter.save()

    return response.json(meter)
  }

  async destroy({ params, response }) {
    const { id } = params

    // Find the meter to delete
    const meter = await Meter.find(id)

    if (!meter) {
      return response
        .status(404)
        .json({ message: 'Meter not found' })
    }

    // Delete the meter
    await meter.delete()

    return response.json({ message: 'Meter deleted successfully' })
  }
}

module.exports = MetersController
