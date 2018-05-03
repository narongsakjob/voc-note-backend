'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let VocabSchema = new Schema({
	note_id: Number,
	word: String,
	translation: String
})

module.exports = VocabSchema