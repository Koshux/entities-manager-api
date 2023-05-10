'use strict'

const Circuit = use('App/Models/Circuit')

class CircuitsController {
  async index({ response }) {
    // Retrieve all circuits
    const circuits = await Circuit.all()

    return response.json(circuits)
  }

  async show({ params, response }) {
    const { id } = params

    // Retrieve a specific circuit by ID
    const circuit = await Circuit.find(id)

    if (!circuit) {
      return response
        .status(404)
        .json({ message: 'Circuit not found' })
    }

    return response.json(circuit)
  }

  async store({ request, response }) {
    const { installation_date, is_main } = request.post()

    // Create a new circuit
    const circuit = new Circuit()
    circuit.installation_date = installation_date
    circuit.is_main = is_main
    await circuit.save()

    return response
      .status(201)
      .json(circuit)
  }

  async update({ params, request, response }) {
    const { id } = params

    // Find the circuit to update
    const circuit = await Circuit.find(id)

    if (!circuit) {
      return response
        .status(404)
        .json({ message: 'Circuit not found' })
    }

    // Update circuit details
    const { installation_date, is_main } = request.post()
    circuit.installation_date = installation_date
    circuit.is_main = is_main
    await circuit.save()

    return response.json(circuit)
  }

  async destroy({ params, response }) {
    const { id } = params

    // Find the circuit to delete
    const circuit = await Circuit.find(id)

    if (!circuit) {
      return response
        .status(404)
        .json({ message: 'Circuit not found' })
    }

    // Delete the circuit
    await circuit.delete()

    return response.json({ message: 'Circuit deleted successfully' })
  }
}

module.exports = CircuitsController
