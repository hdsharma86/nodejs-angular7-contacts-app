'use strict';

var _ = require('lodash');
var Contact = require('../models/ContactModel');

exports.index = function(req, res){
    console.log(req.headers.authorization);
    Contact.find({user_id: req.headers.authorization}).sort({"created_on": -1}).exec(function(err, contacts){
        if(err) { return handleError(res, err); }
        return res.json(200, contacts);
    });
}

// Get a single Contact
exports.show = function(req, res) {
    Contact.findById(`${req.params.id}`, function (err, contacts) {
        if(err) { return handleError(res, err); }
        if(!contacts) { return res.send(404); }
        return res.json(contacts);
    });
};

// Creates a new Contact in the DB.
exports.create = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    console.log(req.body);
    Contact.create(req.body, function(err, contact) {
        if(err) { return handleError(res, err); }
        return res.json(201, contact);
    });
};

// Updates an existing Contact in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    if(req.body.created_on) { delete req.body.created_on; }
    if(req.body.user_id) { delete req.body.user_id; }
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contact) {
        if (err) { return handleError(res, err); }
        Contact.findById(req.params.id, function (err, updated_contact) {
            if (err) { return handleError(res, err); }
            if(!updated_contact) { return res.send(404); }
            return res.json(200, updated_contact);
        });
    });
};

// Deletes a Contact from the DB.
exports.destroy = function(req, res) {

    Contact.findByIdAndRemove(req.params.id, function (err) {
        if(err) { return handleError(res, err); }
        return res.send(204);
    });
    
};

function handleError(res, err) {
    return res.send(500, err);
}