const db = require("../models");
const bcrypt = require("bcrypt")
const moment=require("moment");
const helper=require("../utils/helper")
const User = db.users;


// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.firstname ) {
    res.status(400).send({ message: "First name can not be empty!" });
    return;
  }
  if (!req.body.lastname ) {
    res.status(400).send({ message: "Last name can not be empty!" });
    return;
  }
  if (!req.body.email ) {
    res.status(400).send({ message: "Email address can not be empty!" });
    return;
  }

  if (!req.body.password ) {
    res.status(400).send({ message: "Password can not be empty!" });
    return;
  }
  
  //const password=await helper.hashPassword(req.body.password)
  // Create a Tutorial
  const userObj = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    status: true,
    createdAt: moment().format('MMMM Do YYYY')
  });

  // Save User in the database
  var userModel = new User(userObj);
  userModel
    .save(userObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  var condition = name ? { firstname: { $regex: new RegExp(name), $options: "i" }, lastname: { $regex: new RegExp(name), $options: "i" } } : email? {email: { $regex: new RegExp(email), $options: "i" }}:{};

  
  User.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// Find all active Users
exports.findAllActive = (req, res) => {
  User.find({ status: req.body.status })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


// Find all Users by email
exports.findByEmail = (req, res) => {
  User.find({ email: req.body.email })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };


// Find all Users by email
exports.login = (req, res) => {
  User.find({ email: req.body.email })
    .then(data => {
      if(data.length){
        bcrypt.compare(req.body.password, data[0].password, function(err, result) {
          if(result){
            res.send(data[0]);
          }else{
            res.send({status: false, message: "Invalid user details"});
          }
        });
      }else{
        res.send({status: false, message: "Invalid user details"});
      }
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};


