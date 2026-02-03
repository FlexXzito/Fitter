import express from 'express';
import cors from 'cors';

import {
    userRegisterRute
} from "./routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRegisterRute);


export default app;