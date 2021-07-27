const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number,  ObjectId } = Schema.Types;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: [{
        type: ObjectId,
        ref: "Category"
    }],
    author: [{
        type: ObjectId,
        ref: "User"
    }]
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = new Model('Product', productSchema);