require('dotenv').config();
const mongoose = require("mongoose")
console.log('MongoDB URL:', process.env.MongoUrl);

// Connect to MongoDB
mongoose.connect(process.env.MongoUrl).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });;

console.log('MongoDB URL:', process.env.MongoUrl);

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name: String,
    email : String,
    password : String,
    
});
 const User = mongoose.model('User', UserSchema)

 module.exports = {User} ;