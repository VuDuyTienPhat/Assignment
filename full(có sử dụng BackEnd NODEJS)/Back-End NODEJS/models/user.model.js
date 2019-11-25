const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');


var userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:'Username can\'t be empty ',     
    },
    email:{
        type:String,
        required:'Email can\'t be empty'
    },
    password:{
        type:String, 
        required:'Password can\'t be empty'
    },
    saltSecret:String
});


module.exports=mongoose.model('User',userSchema,'users');








