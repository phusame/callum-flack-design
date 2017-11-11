const config = require('./config/config.js');

module.exports = {
  content: [
    ["pages", {
      page: '/_slug',
      permalink: '/:slug',
      isPost: false
    }],
    ["projects", {
      page: '/_slug',
      permalink: "/:slug",
      isPost: false
    }]
  ],

  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? config.productionUrl
      : config.developmentUrl
  }
}
