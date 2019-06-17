'use strict';
var _ = require('lodash');
var User = require('../models/UserModel');
var mongoose = require('mongoose');
exports.index = function(req, res){
    User.find(function(err, users){
        if(err) { return handleError(res, err); }
        return res.json(200, users);
    });
};

// Get a single User
exports.show = function(req, res) {
    console.log(req.params.id);
    User.findById(`${req.params.id}`, function (err, user) {
        if(err) { return handleError(res, err); }
        if(!user) { return res.sendStatus(404); }
        return res.json(user);
    });
};

// Creates a new Contact in the DB.
exports.create = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    console.log(req.body);
    User.create(req.body, function(err, user) {
        if(err) { return handleError(res, err); }
        return res.json(201, user);
    });
};

// Updates an existing Contact in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    if(req.body.created_on) { delete req.body.created_on; }
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) { return handleError(res, err); }
        User.findById(req.params.id, function (err, user_updated) {
            if (err) { return handleError(res, err); }
            if(!user_updated) { return res.send(404); }
            return res.json(200, user_updated);
        });
    });
};

// Deletes a Contact from the DB.
exports.destroy = function(req, res) {

    User.findByIdAndRemove(req.params.id, function (err) {
        if(err) { return handleError(res, err); }
        return res.send(204);
    });
    
};

function handleError(res, err) {
    return res.send(500, err);
}