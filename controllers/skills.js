const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill
};

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  // Get the todo for the id that is passed as a route param
  // All route params are accessed via the req.params object
  // console.log(req.params)
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  // Obtain the array of todos from the Todo model
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}