const db = require("../models");
const moment=require("moment");
const helper=require("../utils/helper")
const Vendor = db.vendors;


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

  if (req.body.password !== req.body.confirmPassword ) {
    res.status(400).send({ message: "Password not match!" });
    return;
  }
  
  //const password=await helper.hashPassword(req.body.password)
  // Create a Tutorial
  const vendorObj = new Vendor({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    store: req.body.store,
    address: req.body.address,
    address_2:  req.body.address_2,
    country: req.body.country,
    city: req.body.city,
    town: req.body.town,
    localGovernment: req.body.localGovernment,
    storePhone: req.body.storePhone,
    password: req.body.password,
    status: true,
    createdAt: moment().format('MMMM Do YYYY')
  });

  // Save Vendor in the database
  var vendorModel = new Vendor(vendorObj);
  vendorModel
    .save(vendorObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the vendor."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  var condition = name ? { firstname: { $regex: new RegExp(name), $options: "i" }, lastname: { $regex: new RegExp(name), $options: "i" } } : email? {email: { $regex: new RegExp(email), $options: "i" }}:{};

  
  Vendor.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vendors."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vendor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Vendor with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Vendor with id=" + id });
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

  Vendor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Vendor with id=${id}. Maybe Vendor was not found!`
        });
      } else res.send({ message: "Vendor was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vendor with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Vendor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Vendor with id=${id}. Maybe Vendor was not found!`
        });
      } else {
        res.send({
          message: "Vendor was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vendor with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Vendors were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vendors."
      });
    });
};

// Find all active Vendors
exports.findAllActive = (req, res) => {
  Tutorial.find({ status: req.body.status })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vendors."
      });
    });
};


// Find all Vendors by email
exports.findByEmail = (req, res) => {
    Tutorial.find({ email: req.body.email })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vendors."
        });
      });
  };
