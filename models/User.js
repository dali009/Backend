const moongose = require('mongoose');
const UserSchema = moongose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    picturePath:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    }
},{timestamps : true})

module.exports = moongose.model('User', UserSchema)
