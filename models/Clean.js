const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const MassageSchema = new Schema({
    name: String,
    massage: String,
    pdf:String,
    dateCreated: {
        type: Date,
        default: Date.now,
      },
  })

  const Massage = mongoose.model('Massage', MassageSchema);

  module.exports= Massage