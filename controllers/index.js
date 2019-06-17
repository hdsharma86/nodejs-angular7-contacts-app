'use strict';

var express = require('express');
var contacts = require('./ContactController');
var users = require('./UserController');
var auth = require('./AuthController')

var router = express.Router();

// Contact(s) routes...
router.get('/contacts', contacts.index);
router.get('/contacts/:id', contacts.show);
router.post('/contacts', contacts.create);
router.put('/contacts/:id', contacts.update);
router.delete('/contacts/:id', contacts.destroy);

// User(s) routes...
router.get('/users', users.index);
router.get('/users/:id', users.show);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.destroy);

// Authentication...
router.post('/login', auth.login);

module.exports = router;