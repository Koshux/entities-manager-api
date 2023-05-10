'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const CustomersController = use('App/Controllers/Http/CustomersController')
const SitesController = use('App/Controllers/Http/SitesController')
const MetersController = use('App/Controllers/Http/MetersController')
const CircuitsController = use('App/Controllers/Http/CircuitsController')

Route.on('/').render('welcome')
Route.group(() => {
  // Customer routes
  Route.get('customers', 'CustomersController.index')
  Route.get('customers/:id', 'CustomersController.show')
  Route.get('customers', 'CustomersController.store')
  Route.get('customers/:id', 'CustomersController.update')
  Route.get('customers/:id', 'CustomersController.destroy')

  // Customer routes
  Route.get('sites', 'SitesController.index')
  Route.get('sites/:id', 'SitesController.show')
  Route.get('sites', 'SitesController.store')
  Route.get('sites/:id', 'SitesController.update')
  Route.get('sites/:id', 'SitesController.destroy')

  // Customer routes
  Route.get('meters', 'MetersController.index')
  Route.get('meters/:id', 'MetersController.show')
  Route.get('meters', 'MetersController.store')
  Route.get('meters/:id', 'MetersController.update')
  Route.get('meters/:id', 'MetersController.destroy')

  // Customer routes
  Route.get('circuits', 'CircuitssController.index')
  Route.get('circuits/:id', 'CircuitssController.show')
  Route.get('circuits', 'CircuitssController.store')
  Route.get('circuits/:id', 'CircuitssController.update')
  Route.get('circuits/:id', 'CircuitssController.destroy')
}).prefix('api/v1')
