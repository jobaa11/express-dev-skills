const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.somethingcrazy);
  res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
  skill.delete(req.params.id);
  // If data is mutated we need to redirect
  // Where we redirect to, is entirely up to you
  // what do want your app to do?
  res.redirect('/skills');
}

function create(req, res) {
  // The model is responsible for CRUD
  console.log('req.body', req.body)
  Skill.create(req.body);
  // If data is updated/added we need to redirect
  // Where we redirect to, is entirely up to you
  // what do want your app to do?
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new');
}

function show(req, res) {
  // Get the Skill for the id that is passed as a route param
  // All route params are accessed via the req.params object
  // console.log(req.params)
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  // Obtain the array of skills from the Skill model
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}