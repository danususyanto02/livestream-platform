import Express from "express";
import Joi from "joi";
import ExpressValidation from "express-joi-validation";
import { postLogin, postRegister } from "../controller/controllers.js";

const router = Express.Router();

const validator = ExpressValidation.createValidator({});

const registerSchema = Joi.object({
    username: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(12),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(12),
});

router.post('/register', validator.body(registerSchema), postRegister);
router.post('/login', validator.body(loginSchema), postLogin);

export default router;