// person.route.js

const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('./person.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let person = new Business(req.body);
  person.save()
    .then(person => {
      res.status(200).json({'person': 'person in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, person){
      res.json(person);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, person) {
    if (!person)
      res.status(404).send("data is not found");
    else {
        person.first_name = req.body.first_name;
        person.last_name = req.body.last_name;
        person.person_qualification= req.body.person_qualification;
        person.date_of_birth= req.body.date_of_birth;
        person.marital_status= req.body.marital_status;
        person.person_hobby = req.body.person_hobby;

        person.save().then(person => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, person){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;
