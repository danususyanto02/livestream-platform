
import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExist = await User.exists({ email: email.toLowerCase() });

        if (userExist) {
            return res.status(409).send("Email Already Exists");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        //JWT Token
        const token = jwt.sign(
            {
                userID: user._id,
                email: user.email,
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        return res.status(201).json({
            userDetails: {
                username: user.username,
                email: user.email,
                token: token,
            },

        });


        //Success response to the user 


    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
 
};



