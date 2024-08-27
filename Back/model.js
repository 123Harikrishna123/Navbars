const mongoose = require('mongoose');

const UserAuth = mongoose.Schema({
    UserName:String,
    email:{
        require:true,
        type:String
        
    },
    password:String
})

module.exports=mongoose.model('Userauth',UserAuth);