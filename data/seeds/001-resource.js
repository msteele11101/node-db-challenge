
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: `computer`, resource_description: 'to be able to code',},
        {resource_name: `Training Kit`, resource_description: 'For the knowledge',},
        {resource_name: `Cheat sheets`, resource_description: 'for quick refrences',},
        {resource_name: `Your TL`, resource_description: 'use TLs to help when you have blockers',}
      ]);
    });
};
