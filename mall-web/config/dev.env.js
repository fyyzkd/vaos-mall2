'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8080"'
  BASE_API: '"http://localhost:8201/mall-admin"'
  // BASE_API: '"http://120.27.63.9:8080"'
})
