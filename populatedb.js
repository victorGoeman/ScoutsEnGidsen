#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Groep = require('./models/groep')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var groepen = []

function groepCreate(name, minLT, maxLT, cb) {
  groepdetail = {name:name}
  if (minLT != false) groepdetail.minLT = minLT
  if (maxLT != false) groepdetail.maxLT = maxLT
  
  var groep = new Groep(groepdetail);
       
  groep.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Groep: ' + groep);
    groepen.push(groep)
    cb(null, groep)
  }  );
}

function createGroepen(cb) {
    async.parallel([
        function(callback) {
          groepCreate('Kapoenen', 6, 8, callback);
        },
        function(callback) {
          groepCreate('Wouters', 8, 11, callback);
        },
        function(callback) {
          groepCreate('Jonggivers', 11, 14, callback);
        },
        function(callback) {
          groepCreate('Givers', 14, 17, callback);
        },
        function(callback) {
          groepCreate('Jins', 17, false, callback);
        },
        function(callback) {
          groepCreate('Leiding', 18, false, callback);
        },
        ],
        // optional callback
        cb);
}

async.series([
    createGroepen
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+groepen);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




