const User=require("../models/user_model")
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
        // console.log(req.body);
        const { username, email, phone,password } = req.body;
        const Userexist=User.findOne({email:email});
        if (Userexist) {
            return res.status(400).send({ message: "User already exists" });
        }
        await User.create({username,email,phone,password})
        res.status(200).send({data }); 
    } catch (error) {
        console.error("Error in register route:", error);
        res.status(500).send({ message: "Error Occurred" });
    }
};

module.exports = { home, register };
