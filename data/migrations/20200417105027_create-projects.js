
exports.up = function(knex) {
  return (
      knex.schema
      .createTable("project", tbl => {
          tbl.increments("id");


      })
  )
};

exports.down = function(knex) {
  
};
