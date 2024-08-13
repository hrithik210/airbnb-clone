const express  = require("express");

const cors = require('cors');
const { User } = require("./db");
const bcrypt = require('bcrypt')
const app = express();
app.use(express.json())
app.use(cors())

const bcryptSalt = bcrypt.genSalt(10)

app.get("/get", (req,res)=>{
    res.json("test ok")
})

app.post('/register', async(req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if a user with the same email already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({
          message: 'Email already exists',
        });
      }
  
      // Create a new user if email doesn't exist
      await User.create({
        name,
        email,
        password,
      });
  
      return res.status(201).json({
        message: 'User created successfully',
      });
    } catch (error) {
        console.log(error)
      return res.status(500).json({
        message: 'Server error',
      });
    }
  });

  app.post('/login', async(req, res) => {
    const {email, password } = req.body;
  
    try {
      // Check if a user with the same email already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({
          message: 'Email already exists',
        });
      }
  
      // Create a new user if email doesn't exist
      await User.create({
        name,
        email,
        password : bcrypt.hashSync(password , bcryptSalt),
      });
  
      return res.status(201).json({
        message: 'User created successfully',
      });
    } catch (error) {
        console.log(error)
      return res.status(500).json({
        message: 'Server error',
      });
    }
  });

app.listen(3000);