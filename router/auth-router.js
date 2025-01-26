const express = require("express");
const { home, register, login } = require("../controller/auth-controller");
const validate=require("../middleware/validate_middleware")
const signupSchema=require("")
const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(login);

module.exports = router;
