const express = require("express");
const app = express();
const router = require("./router/auth-router"); 
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error_middleware");

app.use(express.json());

app.use("/api/auth", router);
app.use(errorMiddleware);

connectDb()
    .then(() => {
        const PORT = 5003;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log("Database connection successful!");
        });
    })
    .catch((err) => {
        console.error("Database connection failed:");
        console.error(err);
    });