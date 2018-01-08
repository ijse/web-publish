module.exports = app => {
  if (app.config.env === 'local') {
    app.beforeStart(async () => {
      app.logger.debug('app beforeStart')
      await app.model.sync({force: true});
    });
  }
}
