const express= require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/auth');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.use("/auth", authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
