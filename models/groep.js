var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GroepSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
	longname: {type: String, max:200},
    minLT: {type: Number},
    maxLT: {type: Number},
	description: {type: String, required: true}
  }
);

// Virtual voor leeftijd range van groep
GroepSchema
.virtual('LTrange')
.get(function () {
  if(this.maxLT == null) { return this.minLT + '+'; }
  else { return this.minLT + 'j - ' + this.maxLT + 'j'; }
});

// Virtual for groep's URL
GroepSchema
.virtual('url')
.get(function () {
  return '/groep/' + this.name;
});

//Export model
module.exports = mongoose.model('Groep', GroepSchema, 'groepen');