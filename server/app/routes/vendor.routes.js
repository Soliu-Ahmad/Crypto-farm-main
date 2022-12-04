module.exports = app => {
  const vendor = require("../controllers/vendor.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", vendor.create);

  // Retrieve all Users
  router.get("/", vendor.findAll);

  // Retrieve all published Users
  router.post("/by-status", vendor.findAllActive);

  // Retrieve all published Users
  router.post("/by-email", vendor.findByEmail);

  // Retrieve a single User with id
  router.get("/:id", vendor.findOne);

  // Update a User with id
  router.put("/:id", vendor.update);

  // Delete a User with id
  router.delete("/:id", vendor.delete);

  // Create a new User
  router.delete("/", vendor.deleteAll);

  app.use("/api/vendors", router);
};
