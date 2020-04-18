
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: `HTML Site`, project_description: 'create a html site', completed: true,},
        {project_name: `Javascript Site`, project_description: 'create a Webpage using javascript', completed: true,},
        {project_name: `React App`, project_description: 'create a React APP', completed: true ,},
        {project_name: `API`, project_description: 'create your own API', completed: false,}
      ]);
    });
};
