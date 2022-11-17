const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    quantity: {type: Number, require: true},
    brand: {type: String, require: true},
    username: {type: String, require: true}
});

module.exports = model('Product', ProductSchema);