'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Migration
let TaskSchema = require('./task_model')
let UserSchema = require('./user_model')

let Base = []
Base.Task = mongoose.model('Tasks', TaskSchema)
Base.User = mongoose.model('Users', UserSchema)

module.exports = Base