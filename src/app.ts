import  Express  from "express";
import chalk from "chalk";
import { connectToDatabase } from "./db/connect-db";
import dotenv from "dotenv";

dotenv.config();
const app = Express();

//@ts-ignore
connectToDatabase(process.env.MONGODB_URL);

app.listen(process.env.PORT, () => {
    console.log(chalk.bgGreen("Server Started"));
})