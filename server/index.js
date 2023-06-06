const express =require('express')
const cors =require('cors') 
const mongoose=require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User=require('./models/User.Model')

const app = express()
app.use(express.json())
// app.use(express.urlencoded())
app.use(cors())
mongoose.connect("mongodb+srv://shivamjangir19:OTCHbjNgW2elGL8P@cluster0.rbuyfy7.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)


app.post("/login",async (req, res)=> {
    try{
        const { email, password} = req.body
        const user =await  User.findOne({
            // email:req.body.email ,
            // password:req.body.password,
            email:email,
           
        })
     console.log(user);
        // User.findOne({ email: email}, (err, user) => {
            if(user){
                const token =jwt.sign(
                    {   name:user.name,
                        email:user.email
                    },
                    'secret123'
                )

                const passwordMatch = await bcrypt.compare(password, user.password);

                if(passwordMatch) {
                    res.send({message: " Login Successfull",user:user, token :token, status: true})
                } else {
                    res.send({ message: "Password didn't match", status: false})
                }
            } else {
                res.send({message: "User not registered"})
            }
    }
    catch(err){
        res.send({message:"err"})
    }
    
    // })
}) 

app.post("/register",async (req, res)=> {
    try{
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email });
        
        if (user) {
          res.send({ message: "User already exists" });
        } else {
          const plainPassword = password;
          const saltRounds = 10;
          const hash = await bcrypt.hash(plainPassword, saltRounds);
        
          await User.create({
            name: name,
            email: email,
            password: hash,
          });
        
          res.send({ message: "Successfully Registered, Please login now." });
        }
    }catch(err){
        res.send({message:"err"});
    }
   

   
   
}) 

app.listen(9001,() => {
    console.log("BE started at port 9001")
})