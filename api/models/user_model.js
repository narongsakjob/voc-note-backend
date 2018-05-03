'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
  name: String,
  email: String
})

module.exports = UserSchema