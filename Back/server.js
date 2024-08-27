const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const UserAuth = require('./model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'My_Name_is_Hari';



const PORT = 5000;

const app = express();
app.use(express.json());


app.use(cors({
    origin:' http://localhost:5173',
    method:'PUT,PATCH,DELETE,GET,POST,HEAD',
    Credential:true
}));

mongoose.connect('mongodb+srv://Hari:express.js@cluster0.l8stbdd.mongodb.net/your-database-name?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then( ()=> console.log('DB Connected Seccess'))
    .catch(err =>console.log(err));

app.post('/register', async (req,res) =>{
      try{

        const {UserName , email , password} =req.body;

        if(!UserName || !email || !password){
            return res.status(400).json({message: 'All Fields are required'});
        }
        let exist = await UserAuth.findOne({email});

        if(exist){
            return res.status(400).json({message:'User allredy exist'})
        }

        const hasedpassword = await bcrypt.hash(password , 10);

        const Newuser = new UserAuth({
            UserName,
            email,
            password :hasedpassword
        })
         await Newuser.save();
         return res.status(201).json({message:'User Registration Seccess'})


      }catch(err){
        console.error('Registration Failed', err)
        return res.status(500).json({message: 'Internal Server Error'})
      }
})

app.post('/login',async  (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password ){
            return res.status(400).json({message : 'All fields are Required'});
        }
        let user = await UserAuth.findOne({email})

        if(!user){
            return res.status(400).json({message : 'User not found please Register'});
        }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.status(400).json({message : 'Invalid Credential'});
        }

        const token = jwt.sign({ id: user._id}, JWT_SECRET , {expiresIn : '1h'});
         return res.status(200).json({message : ' User Login succsess', token})



    }catch(err){
        console.error( " Login Failed",err);
      };
})


app.get('/', (req,res) =>{
    res.send(" Heloo Baby");
})



app.listen(PORT , ()=>{
    console.log(`Server Running at ${PORT}`)
});