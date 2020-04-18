exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: `study`, task_notes: 'study all TKs to gain ultimate knowledge',completed: true,  project_id: 1,},
        {task_description: `practice`, task_notes: 'Practice makes perfect',completed: true, project_id: 2,},
        {task_description: `rest`, task_notes: 'sleep is for the weak XD',completed: true, project_id: 3,},
        {task_description: `finish clean up on code `, task_notes: 'clean code is a clean life', completed: true, project_id: 4,}
      ]);
    });
};
