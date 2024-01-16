const mongoose= require('mongoose');
const productInCartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email: String,
    phone: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    cart:{
        type: [productInCartSchema],
        default: []
    },
    wishlist:{
        type: Array,
        default: []
    }
});
module.exports= mongoose.model('User', userSchema);