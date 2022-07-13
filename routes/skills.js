var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /todos (index functionality - list all)
router.get('/', skillsCtrl.index);
// GET /todos/new (new functionality - show a form)
router.get('/new', skillsCtrl.new);
// GET /todos/:id (show functionality - show one todo)
router.get('/:id', skillsCtrl.show);

module.exports = router;
