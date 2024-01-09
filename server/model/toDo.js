import mongoose from "mongoose";


const Todoschema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAT:{
        type:Date,
        default:Date.now
    }
});

const todo=mongoose.model('todo',Todoschema)

export default todo;