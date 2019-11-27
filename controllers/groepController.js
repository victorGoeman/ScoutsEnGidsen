var Groep = require('../models/groep');
var async = require('async');
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');



// Display index page.
exports.index = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('index', { title: 'Start', groep_list: results.list_groepen } );
    });
};

// Display info page.
exports.info = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('info', { title: 'Info', groep_list: results.list_groepen } );
    });
};

// Display multimedia page.
exports.media = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('media', { title: 'Multimedia', groep_list: results.list_groepen } );
    });
};

// Display Facebook page.
exports.facebook = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('facebook', { title: 'Facebook', groep_list: results.list_groepen } );
    });
};

// Display Verhuur page.
exports.verhuur = function(req, res, next) {

    async.parallel({
        list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        // Successful, so render.
        res.render('verhuur', { title: 'Verhuur', groep_list: results.list_groepen } );
    });
};

// Display detail page for a specific Groep.
exports.groep_detail = function(req, res) {
    async.parallel({
        groep: function(callback) {
            Groep.find({ name: req.params.name})
              .exec(callback)
        },
		list_groepen: function(callback) {
            Groep.find({})
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.groep==null) { // No results.
            var err = new Error('Groep not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('groep_detail', { title: results.groep[0].name, groep: results.groep[0], groep_list: results.list_groepen } );
    });

};

