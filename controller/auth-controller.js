const User=require("./models/user_model")
const bcrypt = require('bcrypt');
const home = async (req, res) => {
    try {
        res.render("Home"); 
    } catch (error) {
        console.error("Error rendering home page:", error);
        res.status(500).send({ message: "Error Occurred" });
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check if the user already exists
        const Userexist = await User.findOne({ email: email });

        if (Userexist) {
            return res.status(400).send({ message: "User already exists" });
        }

        // Hash the password
        const saltround = 10;
        console.log("Password before hashing:", password);
        const hash_password = await bcrypt.hash(password, saltround);
        console.log("Hashed password:", hash_password);

        // Create a new user
        const data = await User.create({ username, email, phone, password: hash_password });
        // res.status(200).send({ msg:userCreated,token:await userCreated.generateToken()});//JWT tokens are used to provide autentication and authorization and also dont the tokens are saved on the client side.
    } catch (error) {
        console.error("Error in register route:", error);
        res.status(500).send({ message: "Error Occurred" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: "Invalid password" });
        }

       
    } catch (error) {
        console.error("Error in login route:", error);
        res.status(500).send({ message: "Error occurred" });
    }
};

module.exports = { home, register,login};
