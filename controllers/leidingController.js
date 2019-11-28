var Groep = require('../models/groep');
var Gastenboek = require('../models/gastenboek');
var Leiding = require('../models/leiding');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

// Display leiding page.
exports.leiding_get = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
		list_leiding: function(callback) {
			Leiding.find({})
			  .sort({'_id': -1})
			  .exec(callback)
		},
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('leiding', { title: 'Leiding', groep_list: results.list_groepen, leiding_list: results.list_leiding } );
    });
=======
var Groep = require('../models/groep');
var Gastenboek = require('../models/gastenboek');
var Leiding = require('../models/leiding');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

// Display leiding page.
exports.leiding_get = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
		list_leiding: function(callback) {
			Leiding.find({})
			  .sort({'_id': -1})
			  .exec(callback)
		},
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('leiding', { title: 'Leiding', groep_list: results.list_groepen, leiding_list: results.list_leiding } );
    });
>>>>>>> bb8cbcef444865837e57b17b76298b5ed1f020e7
};