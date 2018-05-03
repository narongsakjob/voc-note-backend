'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

// Migration
let UserSchema = require('./user_model')
let NoteSchema = require('./note_model')
let VocabSchme = require('./vocab_model')

let BaseSchema = []
BaseSchema.User = mongoose.model('Users', UserSchema)
BaseSchema.Note = mongoose.model('Notes', NoteSchema)
BaseSchema.Vocab = mongoose.model('Vocabs', VocabSchme)

module.exports = BaseSchema