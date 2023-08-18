const mongoose = require('mongoose')
const validator = require('validator');
const Schema = mongoose.Schema



const userSchema = new Schema({
    reg:{
        type:String,
        required: [true, 'please provide you student registration id'],
        unique: [true, "reg must be a unique field"],
    },
    fullname:{
            type:String
    },
    department:{
        type:String
    },
    password:{
        type:String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    accounttype:{
        type: String,
        required: true

    },
    email:{
        type:String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
    },
    profilePicture:{
        type:String
    },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: Date,
    lastLogin: Date,
    accountype:String
},
},

{timestamps: true}


)
module.exports = mongoose.model('User', userSchema)
