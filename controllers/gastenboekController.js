var Groep = require('../models/groep');
var Gastenboek = require('../models/gastenboek');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

// Display gastenboek page.
exports.gastenboek_get = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
		list_berichten: function(callback) {
			Gastenboek.find({})
			  .sort({'_id': -1})
			  .exec(callback)
		},
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('gastenboek', { title: 'Gastenboek', groep_list: results.list_groepen, gastenboek_berichten: results.list_berichten } );
    });
};

// Handle Gastenboek on POST.
exports.gastenboek_post = [

    // Validate fields.
    body('naam').isLength({ min: 1 }).trim().withMessage('Naam is verplicht.'),
    body('bericht').isLength({ min: 1 }).trim().withMessage('Bericht is verplicht.'),
    body('email', 'Invalid email').optional({ checkFalsy: true }).normalizeEmail().isEmail(),
    body('website', 'Invalid url').optional({ checkFalsy: true }).isURL(),

    // Sanitize fields.
    sanitizeBody('naam'),
    sanitizeBody('bericht'),
    sanitizeBody('email'),
	sanitizeBody('website'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('gastenboek', { title: 'Gastenboek', gastenboek: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Gastenboek object with escaped and trimmed data.
            var gastenboek = new Gastenboek(
                {
                    naam: req.body.naam,
                    bericht: req.body.bericht,
                    email: req.body.email,
                    website: req.body.website
                });
            gastenboek.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new gastenboek record.
                res.redirect('/gastenboek');
            });
        }
    }
=======
var Groep = require('../models/groep');
var Gastenboek = require('../models/gastenboek');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

// Display gastenboek page.
exports.gastenboek_get = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
		list_berichten: function(callback) {
			Gastenboek.find({})
			  .sort({'_id': -1})
			  .exec(callback)
		},
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('gastenboek', { title: 'Gastenboek', groep_list: results.list_groepen, gastenboek_berichten: results.list_berichten } );
    });
};

// Handle Gastenboek on POST.
exports.gastenboek_post = [

    // Validate fields.
    body('naam').isLength({ min: 1 }).trim().withMessage('Naam is verplicht.'),
    body('bericht').isLength({ min: 1 }).trim().withMessage('Bericht is verplicht.'),
    body('email', 'Invalid email').optional({ checkFalsy: true }).normalizeEmail().isEmail(),
    body('website', 'Invalid url').optional({ checkFalsy: true }).isURL(),

    // Sanitize fields.
    sanitizeBody('naam'),
    sanitizeBody('bericht'),
    sanitizeBody('email'),
	sanitizeBody('website'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('gastenboek', { title: 'Gastenboek', gastenboek: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Gastenboek object with escaped and trimmed data.
            var gastenboek = new Gastenboek(
                {
                    naam: req.body.naam,
                    bericht: req.body.bericht,
                    email: req.body.email,
                    website: req.body.website
                });
            gastenboek.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new gastenboek record.
                res.redirect('/gastenboek');
            });
        }
    }
>>>>>>> bb8cbcef444865837e57b17b76298b5ed1f020e7
];