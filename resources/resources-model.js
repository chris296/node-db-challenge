const db = require('../db-config');

module.exports = {
    find,
    add
};

function find() {
    return db('resource');
}

function add(resource) {
    return db('resource').insert(resource).then(ids => {
        return find();
    })
}