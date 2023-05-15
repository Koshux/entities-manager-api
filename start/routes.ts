import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('profile', 'ProfileController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('sites', 'SitesController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('meters', 'MetersController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('circuits', 'CircuitsController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('profile.sites', 'ProfileController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('sites.meters', 'ProfileController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  Route.resource('meters.circuits', 'ProfileController')
    // .middleware({ '*': ['auth'] })
    .apiOnly()
  // Route.resource('profile.sites.meters.circuits', 'ProfileController')
  //   // .middleware({ '*': ['auth'] })
  //   .apiOnly()
})
