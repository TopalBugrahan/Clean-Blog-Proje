const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MassageSchema = new Schema({
    _id:Number,
    title: String,
    description: String,
  })

const Photo = mongoose.model('Photo', MassageSchema);

/*Photo.create({
    _id:3,
    title: 'Photo Title 3',
    description: 'Photo description 3 lorem ipsum',
    
  });*/

  

Photo.find({title:"Photo Title 3"},(err, data) => {
    console.log(data);
  });