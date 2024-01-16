const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const userController = {
  registerUser: asyncHandler(async (req, res) => {
    console.log("This is recived from register request", req.body);
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      res.status(400);
      throw new Error("All fileds are mantatory");
    }
    //check for user already registers or not
    const avalableUser = await User.findOne({ email });
    if (avalableUser) {
      res.status(400);
      throw new Error("Email already been registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    console.log(`User created success ${user}`);

    const token = jwt.sign(
      {
        user: {
          username: user.firstname,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET_KEY
    );

    if (user) {
      res.status(201).json({
        id: user.id,
        username: user.firstname,
        email: user.email,
        token:token
      });
    } else {
      res.status(400);
      throw new Error("User data is not valid");
    }
  }),
  loginUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("All fileds are mantatory");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      throw new Error("No user found");
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user: {
            username: user.firstname,
            email: user.email,
            id: user.id,
          },
        },
        process.env.JWT_SECRET_KEY
      );
      res.json({ 
        id: user.id,
        username: user.firstname,
        email: user.email,
        token:token
       });
    } else {
      res.status(401);
      throw new Error("Password is incorrect");
    }
  }),
  forgotPassword: asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
      res.status(400);
      throw new Error("All fileds are mantatory");
    }

    //check for user already registers or not
    const avalableUser = await User.findOne({ email });
    console.log(avalableUser);
    if (avalableUser) {
      const token = jwt.sign(
        { id: avalableUser._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3m" }
      );

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "fundx.me@gmail.com",
          pass: "rvnb wsbr qxim olgg",
        },
      });

      const mailOptions = {
        from: "fundx.me@gmail.com",
        to: email,
        subject: "Reset your password",
        text: `Reset link : https://fundx-frontend.vercel.app/reset-password/${avalableUser.id}/${token}`,
      };

      transporter.sendMail(mailOptions,  (error, info)=> {
        if (error) {
          throw new Error('An error occured while reseting password')
        } else {
          res.status(200)
          res.json({title:"reset password sent to the email adress"})

        }
      });
    }else{
      res.status(404)
      throw new Error("No user found")
    }
  }),
  resetPassword: asyncHandler(async (req, res) => {
    const {id, token}= req.params
    const {password}=req.body

    if(!id||!token||!password){
      res.status(400)
      throw new Error('All fileds are mantatory')
    }

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decode)=>{
      if(err){
        res.status(400)
        throw new Error('Token Expired')

      }else{
        bcrypt.hash(password, 10).then(hash=>{
          User.findByIdAndUpdate({_id:id},{password:hash}).then(u=>{
            res.status(200)
            res.json({title:"Password reset success"})
            
          }).catch(err=>{
            res.status(400)
            throw new Error(err)
          })
        }).catch(err=>{
          res.status(400)
          throw new Error(err)
        })

      }
    })
  }),
//   getById: async (req, res) => {
//     try {
//       const userId = req.params.id;
//       const user = await User.findById(userId);
//       if (user) {
//         res.json({ msg: "User found", data: user });
//       } else {
//         res.status(404).json({ msg: "User not found" });
//       }
//     } catch (error) {
//       res
//         .status(500)
//         .json({ msg: "Error fetching user", error: error.message });
//     }
//   },
//   updateById: async (req, res) => {
//     try {
//       const { name, email, password } = req.body;
//       const updatedUser = await User.findOneAndUpdate(
//         { _id: req.params.id },
//         { name, email, password },
//         { new: true }
//       );
//       if (updatedUser) {
//         res.json({ msg: "User updated", data: updatedUser });
//       } else {
//         res.status(404).json({ msg: "User not found" });
//       }
//     } catch (error) {
//       res
//         .status(500)
//         .json({ msg: "Error updating user", error: error.message });
//     }
//   },
//   deleteById: async (req, res) => {
//     try {
//       const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
//       if (deletedUser) {
//         res.json({ msg: "User deleted", data: deletedUser });
//       } else {
//         res.status(404).json({ msg: "User not found" });
//       }
//     } catch (error) {
//       res
//         .status(500)
//         .json({ msg: "Error deleting user", error: error.message });
//     }
//   },
};

module.exports = userController;
