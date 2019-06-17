'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: {type:"String"},
    lastname:  {type:"String"},
    username: {type:"String"},
    email: {type:"String"},
    phone: {type:"String"},
    password: {type:"String"},
    user_role: {type: "String"},
    token: {type:"String"},
    last_modified: {type: "Date"},
    created_on: {type: "Date"}
});

module.exports = mongoose.model('users', userSchema);