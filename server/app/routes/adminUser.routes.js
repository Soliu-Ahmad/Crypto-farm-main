
    module.exports = app => {
        const adminUser = require("../controllers/adminUser.controller.js");
    
        var router = require("express").Router();
    
        // Create a new Adminuser
        router.post("/", adminUser.create);

        // Login Adminuser
        router.post("/login", adminUser.login);
    
        // Retrieve all Adminuser
        router.get("/", adminUser.findAll);
    
        // Retrieve a single Adminuser with id
        router.get("/:id", adminUser.findOne);
    
        // Update a Adminuser with id
        router.put("/:id", adminUser.update);
    
        // Delete a Adminuser with id
        router.delete("/:id", adminUser.delete);
    
        app.use("/api/admin-users", router);
    };
