import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {
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
            return res.status(200).json({
                userDetails: {
                    username: user.username,
                    email: user.email,
                    token: token,
                },

            });
        }

        return res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }

};