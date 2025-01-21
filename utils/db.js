const mongoose = require("mongoose");

// const URI = "mongodb+srv://ipsita30:K01eZGD2D8wJrxub@Cluster0.yp9ta.mongodb.net/?retryWrites=true&w=majority";

const URI = "mongodb+srv://ipsita30:XMw7VFSSxLZUOJkH@cluster0.yp9ta.mongodb.net/avi?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error.message);
        process.exit(0);
    }
};

module.exports = connectDb;
//XMw7VFSSxLZUOJkH