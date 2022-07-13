const skill = [
    {id: 010, skill: 'CSS', aqcuired: true},
    {id: 224, skill: 'Javascript', aqcuired: true},
    {id: 464, skill: 'Python', aqcuired: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skill.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skill;
  }