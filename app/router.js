/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller:ctl, passport } = app

  router.get('/', ctl.home.index)

  // account
  router.post('/register', ctl.user.register)
  router.post('/login', passport.authenticate('local'))
  router.get('/logout', ctl.user.logout)

  // publish, github, repo operations
  router.get('/project/:owner/:repo', ctl.project.listPRs)
}
