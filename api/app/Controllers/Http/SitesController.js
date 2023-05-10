'use strict'

const Site = use('App/Models/Site')

class SitesController {
  async index({ response }) {
    // Retrieve all sites
    const sites = await Site.all()

    return response.json(sites)
  }

  async show({ params, response }) {
    const { id } = params

    // Retrieve a specific site by ID
    const site = await Site.find(id)

    if (!site) {
      return response
        .status(404)
        .json({ message: 'Site not found' })
    }

    return response.json(site)
  }

  async store({ request, response }) {
    const { coordinates, address, post_code } = request.post()

    // Create a new site
    const site = new Site()
    site.coordinates = coordinates
    site.address = address
    site.post_code = post_code
    await site.save()

    return response
      .status(201)
      .json(site)
  }

  async update({ params, request, response }) {
    const { id } = params

    // Find the site to update
    const site = await Site.find(id)

    if (!site) {
      return response
        .status(404)
        .json({ message: 'Site not found' })
    }

    // Update site details
    const { coordinates, address, post_code } = request.post()
    site.coordinates = coordinates
    site.address = address
    site.post_code = post_code
    await site.save()

    return response.json(site)
  }

  async destroy({ params, response }) {
    const { id } = params

    // Find the site to delete
    const site = await Site.find(id)

    if (!site) {
      return response
        .status(404)
        .json({ message: 'Site not found' })
    }

    // Delete the site
    await site.delete()

    return response.json({ message: 'Site deleted successfully' })
  }
}

module.exports = SitesController
