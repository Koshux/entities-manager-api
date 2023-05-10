'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index({ response }) {
    // Retrieve all customers
    const customers = await Customer.all()

    return response.json(customers)
  }

  async show ({ params, response }) {
    const { id } = params

    // Retrieve a specific customer by ID
    const customer = await Customer.find(id)

    if (!customer) {
      return response
        .status(404)
        .json({ message: 'Customer not found.' })
    }

    return response.json(customer)
  }

  async store({ request, response }) {
    const { email, vat_number } = request.post()

    // Create a new customer
    const customer = new Customer()
    customer.email = email
    customer.vat_number = vat_number
    await customer.save()

    return response
      .status(201)
      .json(customer)
  }

  async update ({ params, request, response }) {
    const { id } = params

    // Find the customer to update
    const customer = await Customer.find(id)

    if (!customer) {
      return response
        .status(404)
        .json({ message: 'Customer not found.' })
    }

    // Update customer details
    const { email, vat_number } = request.post()
    customer.email = email
    customer.vat_number = vat_number
    await customer.save()

    return response.json(customer)
  }

  async destroy({ params, response }) {
    const { id } = params

    // Find the customer to delete
    const customer = await Customer.find(id)

    if (!customer) {
      return response
        .status(404)
        .json({ message: 'Customer not found.' })
    }

    // Delete the customer
    await customer.delete()

    return response.json({ message: 'Customer deleted successfully' })
  }
}

module.exports = CustomerController
