const Sequelize = require('sequelize')
const db = require('../db')

const Url = db.define('url', {
  orig: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  shortCode: {
    type: Sequelize.STRING
  }
})

module.exports = Url
