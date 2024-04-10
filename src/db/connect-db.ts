import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = (url : string) => {
    mongoose.connect(url).then(() => {
        console.log(chalk.bgGreen("Connected to MongoDB Database"))
    }).catch((error)=>{
        console.log(error.message)
    })
}

export { connectToDatabase };