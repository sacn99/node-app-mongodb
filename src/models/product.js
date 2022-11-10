const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = model('Product', ProductSchema);