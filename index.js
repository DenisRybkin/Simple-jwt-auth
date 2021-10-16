const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://fisher:fisherP@cluster0.qvn5r.mongodb.net/simpleJWTayth?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server is started in port ${PORT}`))
    } catch (error) {
        console.log(`ERROR ${error}`);
    }
}
start()