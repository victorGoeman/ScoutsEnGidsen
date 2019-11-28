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
=======
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
>>>>>>> bb8cbcef444865837e57b17b76298b5ed1f020e7
module.exports = mongoose.model('Leiding', LeidingSchema, 'leidingen');