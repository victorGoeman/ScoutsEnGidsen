var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeidingSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
	leeftijd : {type: Number, required: true},
	afbeelding : {type: String, required: true},
	tak : {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('Leiding', LeidingSchema, 'leidingen');