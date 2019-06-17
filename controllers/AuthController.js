'use strict';

var _ = require('lodash');
var User = require('../models/UserModel');
var crypto = require('crypto');

exports.login = function(req, res){
    var token = generateToken();
    if(!req.body.username || !req.body.password){
        return res.status(401).json({ message: 'Invalid Credentials' });
    }

    User.findOne({username:req.body.username, password:req.body.password},function(err, user){
        if(err) { return handleError(res, err); }
        if(user){
            User.findOneAndUpdate({username:req.body.username, password:req.body.password}, {$set: {token:token}}, function (err, updated_user) {
                if (err) { return handleError(res, err); }
            });
            return res.status(200).json({ message: 'OK', user:user, token:token });
        } else {
            return res.status(200).json({ message: 'FAIL', user:{}, token:'' });
        }
    });
}

function generateToken(){
    var data = makeid();
    var cipher = crypto.createCipher('aes-256-ecb', 'MyNodeApp');
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function handleError(res, err) {
    return res.send(500, err);
}