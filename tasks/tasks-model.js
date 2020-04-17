const db = require('../db-config');

module.exports = {
    find,
    add
};

function find() {
    return db.select("task.id", "task.task_description", "task.notes", "task.completed", "task.project_id", "project.name", "project.project_description")
    .from("task")
    .join("project", "task.project_id", "project.id")
}

function add(task) {
    return db('task').insert(task).then(ids => {
        return find();
    });
}