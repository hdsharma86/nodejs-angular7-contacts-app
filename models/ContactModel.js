'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contactSchema = new Schema({
    firstname: {type:"String"},
    lastname:  {type:"String"},
    email:  {type:"String"},
    phone: {type:"String"},
    about: {type:String},
    image_url: {type: "String"},
    user_id: {type: Schema.Types.ObjectId},
    last_modified: {type: "Date"},
    created_on: {type: "Date"}
});

module.exports = mongoose.model('contacts', contactSchema);