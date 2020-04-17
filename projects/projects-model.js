const db = require('../db-config');

module.exports = {
    find,
    add
};

function find() {
    return db('project');
}

function add(project) {
    return db('project').insert(project).then(ids => {
        return find();
    })
}