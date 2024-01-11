import Express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import auth_routes from "./src/routes/authRoutes.js";


dotenv.config();

const PORT = process.env.PORT || process.env.SERVER_PORT;

const app = Express();

app.use(Express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.send('hello world');
});

app.use('/api/auth', auth_routes);

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI).then(() => {
    server.listen(PORT, () => {
        console.log('server is listening on port:', PORT);
    });
}).catch(err =>{
    console.log("Error when connecting to the database");
    console.log(err);
})


