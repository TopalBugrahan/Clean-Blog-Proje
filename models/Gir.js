const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const GirisSchema = new Schema({
    username: String,
    password: String,
    
  })

  const giris = mongoose.model('giris', GirisSchema);

  module.exports= giris