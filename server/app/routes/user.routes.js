module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", user.create);

  // Login Adminuser
  router.post("/login", user.login);

  // Retrieve all Users
  router.get("/", user.findAll);

  // Retrieve all published Users
  router.post("/by-status", user.findAllActive);

  // Retrieve all published Users
  router.post("/by-email", user.findByEmail);

  // Retrieve a single User with id
  router.get("/:id", user.findOne);

  // Update a User with id
  router.put("/:id", user.update);

  // Delete a User with id
  router.delete("/:id", user.delete);

  // Create a new User
  router.delete("/", user.deleteAll);

  app.use("/api/users", router);
};
