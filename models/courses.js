const mongoose = require('mongoose')
const Users = require('./User')
const Schema = mongoose.Schema

const coursesSchema =  new Schema({
    courseTitle:String,
    courseCode:String,
    department:String,
    courseContent:Array,
    classType:String,
    createdBy:String,
    reg:String,
    
})
module.exports = mongoose.model('courses', coursesSchema)