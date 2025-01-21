const express = require("express");
const app = express();
const router = require("./router/auth-router"); 
const connectDb = require("./utils/db");

app.use(express.json());
app.use("/api/auth", router);

connectDb()
    .then(() => {
        const PORT = 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log("Database connection successful!");
        });
    })
    .catch((err) => {
        console.error("Database connection failed:");
        console.error(err);
    });