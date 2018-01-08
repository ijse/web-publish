const LocalStrategy = require('passport-local').Strategy

module.exports = app => {
  const { passport, logger } = app

  passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    const user = {
      provider: 'local',
      username,
      password,
    }
    logger.debug('%s %s get user: %j', req.method, req.url, user)
    passport.doVerify(req, user, done)
  }))

  passport.verify(async (ctx, user) => {
    if (user.username === 'admin' &&
      user.password === '123') {
      return user
    }
  })

  passport.serializeUser(async (ctx, user) => user)
  passport.deserializeUser(async (ctx, user) => user)
}
