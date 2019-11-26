var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GastenboekSchema = new Schema(
  {
    naam: {type: String, required: true, max: 100},
	bericht: {type: String,required: true},
    email: {type: String, max: 100},
    website: {type: String, max: 100}
  }
);

//Export model
module.exports = mongoose.model('Gastenboek', GastenboekSchema, 'gastenboek');