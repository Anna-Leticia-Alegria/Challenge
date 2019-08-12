import mongoose from 'mongoose'
import environment from './environment'

const dbRoute = "mongodb+srv://annaleticia:anime%21%40%23%24%25@animesitecluster-n2wdx.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = new mongoose.Schema({
    userName: String,
    userLastName: String,
    userBirthDate: String,
    userEmail: String,
    userPassword: String,
    userAnimeList: [{
      animeId: ObjectId,
      nStars: Number
    }]
}, { collection: 'User' }
);
 
let userModel = mongoose.model('User', userSchema);

module.exports = { mongoose: mongoose, userModel: userModel }