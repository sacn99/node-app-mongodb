const { number, boolean } = require('joi')
const {Schema, model} = require('mongoose')


const UserSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    username: {type: String, require:true, min: 8, max:16},
    password: {type: String, require: true},
    identification: {type: Number, require: true},
    active: {type: Boolean, require:true},
    token: {type: String}
});

module.exports = mongoose.model('User', UserSchema)