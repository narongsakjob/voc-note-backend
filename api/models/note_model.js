'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let NoteSchema = new Schema({
	sentence: String,
	translation: String
})

module.exports = NoteSchema