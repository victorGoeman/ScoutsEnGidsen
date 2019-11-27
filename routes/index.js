var express = require('express');
var router = express.Router();


var groep_controller = require('../controllers/groepController');
var gastenboek_controller = require('../controllers/gastenboekController');
var leiding_controller = require('../controllers/leidingController');

/* GET home page. */
router.get('/', groep_controller.index);

// GET request for info page.
router.get('/info', groep_controller.info);

// GET request for multimmedia.
router.get('/media', groep_controller.media);

// GET request for facebook.
router.get('/facebook', groep_controller.facebook);

// GET request for one Groep.
router.get('/groep/:name', groep_controller.groep_detail);

// GET request for verhuur.
router.get('/verhuur', groep_controller.verhuur);

// GET request for gastenboek GET.
router.get('/gastenboek', gastenboek_controller.gastenboek_get);

// POST request for gastenboek POST.
router.post('/gastenboek', gastenboek_controller.gastenboek_post);

// POST request for leinding GET.
router.get('/leiding', leiding_controller.leiding_get);

module.exports = router;
