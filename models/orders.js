const mongoose= require('mongoose');
const orderSchema= new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    userId :{
        type: String,
        required: true
    },
    products: [
       {
        productId: String,
        price: Number,
        quantity: Number
         
       }
    ],
    orderDate:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    }
    
});