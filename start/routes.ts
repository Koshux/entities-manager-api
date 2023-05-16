import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('profile', 'ProfileController')
    .apiOnly()
  Route.resource('sites', 'SitesController')
    .apiOnly()
  Route.resource('meters', 'MetersController')
    .apiOnly()
  Route.resource('circuits', 'CircuitsController')
    .apiOnly()
  Route.resource('profile.sites', 'ProfileController')
    .apiOnly()
  Route.resource('sites.meters', 'ProfileController')
    .apiOnly()
  Route.resource('meters.circuits', 'ProfileController')
    .apiOnly()
  Route.resource('circuits.circuits', 'ProfileController')
    .apiOnly()
  // .middleware({ '*': ['auth'] })
  // Route.resource('profile.sites.meters.circuits.circuits', 'ProfileController')
  //   .apiOnly()
})
