const express = require("express");
const cors = require('cors');
const { User } = require("./db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:5173', // Note: no trailing slash
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.get("/get", (req, res) => {
    res.json("test ok");
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'Email already exists',
            });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create a new user if email doesn't exist
        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: 'User created successfully',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server error',
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const passOk = bcrypt.compareSync(password, existingUser.password);

            if (passOk) {
                token = jwt.sign({email : existingUser.email , id:existingUser._id} ,process.env.jwt_secret, {} , (err,token)=>{
                    if (err) throw err ;
                    res.cookie('token' , token).json(existingUser);
                    console.log(token);
                 })
            } else {
                res.json("pass not ok");
            }
        }

});

app.get('/profile' , (req,res)=>{
    const {token} = req.cookies ;
    
    if (token) {
        jwt.verify(token , process.env.jwt_secret, {}, (err,user)=>{
            if (err) throw err;
            
            res.json(user);
            
        })
    }else{
        res.json(null)
    }

    
}) 


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
