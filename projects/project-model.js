const db = require('../data/db-config');

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function getResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function getProjects() {
    return db('projects')
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

function getTasks() {
    return db('tasks')
        .join('projects')
        .select('tasks.task_description', 'tasks.task_notes', 'tasks.completed', 'projects.project_name', 'projects.project_description')
        // .where({ project_id: id})
}

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}