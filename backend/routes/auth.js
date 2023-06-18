//auth.js
const User = require('../models/User');
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
// Define your JWT secret key
const JWT_SECRET = "MySecretKey123!";


//  End point for creating a user localhost:5000/api/auth/createuser
router.post('/createuser', [
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    let use = await User.findOne({ name });

    if (user) {
      return res.status(400).json({ error: 'This email has already been registered' });
    }
    if (use) {
        return res.status(400).json({ error: 'This username already exists. Please try with something else ' });
      }
      //Hashing password with salr & pepper
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password,salt);

    // Create a new user
    user = new User({
      name,
      email,
      password: secPass
    });

    // Save the user to the database
    await user.save();
    //JWT Auth
    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,JWT_SECRET);
    
    res.json({authToken});


  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


//  End point for authenticating a user localhost:5000/api/auth/createuser
router.post('/login', [
    body('email','Please Enter A Valid Email').isEmail(),
    
    body('password','Password Cannot Be Blank').exists()
  ], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const {email,password} = req.body ;
        try{
            let user = await User.findOne({email});
            if(!user){ return res.status(400).json({error:"Invalid Email Or Password"}) }
            const passwordCompare = await bcrypt.compare(password,user.password);
            if(!passwordCompare) {return res.status(400).json({error:"Invalid Email Or Password"}) }
            const data = {
                user:{
                    id:user.id
                }
            }
            const authToken = jwt.sign(data,JWT_SECRET);
            res.json(authToken);

        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
          }
    

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }


  })
// ...

// End point for getting logged in user detail localhost:5000/api/auth/getuser
router.post('/getuser', fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;
  
  
  // ...
  





module.exports = router;





























// //auth.js
// const User = require('../models/User');
// const express = require('express');
// const router = express.Router();
// const {body,validationResult} = require('express-validator');


// //Creating Users And Posting Their Data On MongoDB


// router.get('/',[
//     body('email').isEmail(),
//     body('name').isLength({min:3}),
//     body('password').isLength({min:5})
// ], (req, res) => {
//   const errors = validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()});
//   }

// //   const user = User(req.body);
// //   user.save();
//   User.create({
//     name:req.body.name,
//     password:req.body.password,
//     email:req.body.email
//   }).then((user)=>res.json(user))
// //   res.send(req.body);
// //   console.log(req.body);
// });

// module.exports = router;

