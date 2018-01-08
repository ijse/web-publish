'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515303009061_5919';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  config.sequelize = {
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false,
    operatorsAliases: false
  }

  return config;
};
