const moongose = require('mongoose');
const TaskSchema = moongose.Schema({
    userId:{
        type: String,
        required: true
    },
    type: {
        type: String,
        enums : ['default','personal','wishlist','work','other'],
        default : 'default'
    },
    status : {
        type : String,
        enums : ['To Do','Doing','Done'],
        default : 'To Do'
    },
    name :{
        type: String,
        required: true
    },
    date : {
        type: Date,
        required : true
    },
    time : {
        type: String,
        required: true
    }
},{timestamps : true})

export default moongose.model('Task',TaskSchema);