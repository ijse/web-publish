/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, passport } = app
  router.get('/', controller.home.index)
  router.post('/register', controller.user.register)
  router.post('/login', passport.authenticate('local'))
  router.get('/logout', controller.user.logout)
}
