const mongoose = require('mongoose');
//const dbURI = "mongodb://hardev123:viren123@cluster0-shard-00-00-gpvrs.mongodb.net:27017,cluster0-shard-00-01-gpvrs.mongodb.net:27017,cluster0-shard-00-02-gpvrs.mongodb.net:27017/diary?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
//const dbURI = 'mongodb://localhost:27017/diary';
const dbURI = 'mongodb+srv://taskapp:taskapp123@cluster0-ton3b.mongodb.net/diary?retryWrites=true';

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established...");
    },
    err => {
        console.log("Connection error: ", err);
    }
);