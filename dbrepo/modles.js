var mongoose = require('mongoose');




// let dbURI = "mongodb+srv://zubairabc:zubairabc@cluster0.9qvbs.mongodb.net/testdatabase";
// let dbURI = 'mongodb://localhost:27017/abc-database';
let dbURI = "mongodb+srv://pak:pak@cluster0.hrkro.mongodb.net/pak?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

///////////************** Mongodb connected or disconnected Events ***********/////////////

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected")

})

mongoose.connection.on('disconnectes', function () {
    console.log("mongoose is disconnected")
    process.exit(1)
})


mongoose.connection.on('error', function (err) {
    console.log('mongoose connecion is in error: ', err)
    process.exit(1)

})

mongoose.connection.on('SIGNIT', function () {
    console.log('app is turminating')
    mongoose.connection.close(function () {
        console.log('mongoose default connection is closed')
        process(0)
    })


})


///////////************** Mongodb connected or disconnected Events ***********/////////////


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    createdOn: { type: Date, 'default': Date.now },
    activeSince: Date

})

var userModle = mongoose.model("users", userSchema)
var otpSchema = new mongoose.Schema({
    "email": String,
    "otpCode": String,
    "createdOn": { "type": Date, "default": Date.now },
});
var otpModel = mongoose.model("otps", otpSchema);
var tweetSchema = new mongoose.Schema({
    "tweet": String,
    "name": String,
    "email": String,
    "createdOn": { "type": Date, "default": Date.now },
});
var tweetmodel = mongoose.model("tweet", tweetSchema);

module.exports = {
    userModle: userModle,
    otpModel: otpModel,
    tweetmodel:tweetmodel
}

