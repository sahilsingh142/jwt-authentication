import express from "express";
import userRouter from "./Routes/userRoute.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use('/user',userRouter);

mongoose.connect("mongodb://localhost:27017/userData")
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log("Server are Connected")
});