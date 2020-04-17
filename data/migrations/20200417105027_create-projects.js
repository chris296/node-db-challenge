
exports.up = function(knex) {
  return (
      knex.schema
      .createTable("project", tbl => {
          tbl.increments("id");
          tbl.string("name", 255).notNullable();
          tbl.string("project_description", 255);
          tbl.boolean("completed").notNullable().defaultTo(false);
      })
      .createTable("resource", tbl => {
          tbl.increments("id");
          tbl.string("name", 255).notNullable().unique();
          tbl.string("description", 255);
      })
      .createTable("task", tbl => {
          tbl.increments("id");
          tbl.string("task_description", 255).notNullable();
          tbl.string("notes", 255);
          tbl.boolean("completed").notNullable().defaultTo(false);

          tbl.string("project_id", 255).notNullable().references("id").inTable("project")
      })
      .createTable("project_resources", tbl => {
          tbl.string("project_id", 255)
          .notNullable()
          .references("id")
          .inTable("project")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

          tbl.string("resource_id", 255)
          .notNullable()
          .references("id")
          .inTable("resource")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

          tbl.unique(["project_id", "resource_id"]);
      })
  )
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists("task")
  .dropTableIfExists("resource")
  .dropTableIfExists("project");
};
