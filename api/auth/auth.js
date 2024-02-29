const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const jwtSecret = "6706f5807dce90987fc767cb331d556785b1fb3abaca31d1d0038ddfe53f54b3633389"

exports.register = async (req, res, next) => {
    const { username, password, role } = req.body
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
            username,
            password: hash,
            role,
        })
            .then((user) => {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                    { id: user._id, username, role: user.role },
                    jwtSecret,
                    {
                        expiresIn: maxAge,
                    }
                );
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000,
                });
                res.status(201).json({
                    message: "User successfully created",
                    user: user._id,
                });
            })
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        })
    }
    try {
        const user = await User.findOne({ username })
        if (!user) {
            res.status(400).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(
                        { id: user._id, username, role: user.role },
                        jwtSecret,
                        {
                            expiresIn: maxAge,
                        }
                    );
                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000,
                    });
                    res.status(200).json({
                        message: "User successfully Logged in",
                        user: user._id,
                    });
                } else {
                    res.status(400).json({ message: "Login not succesful" });
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        });
    }
};

exports.update = async (req, res, next) => {
    const { role, id } = req.body;
    if (role && id) {
        if (role === "admin") {
            await User.findById(id)
                .then((user) => {
                    if (user.role !== "admin") {
                        user.role = role;
                        user.save((err) => {
                            if (err) {
                                res
                                    .status("400")
                                    .json({ message: "An error occurred", error: err.message });
                                process.exit(1);
                            }
                            res.status("201").json({ message: "Update successful", user });
                        });
                    } else {
                        res.status(400).json({ message: "User is already an Admin" });
                    }
                })
                .catch((error) => {
                    res
                        .status(400)
                        .json({ message: "An error occurred", error: error.message });
                });
        }
    }
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.body
    await User.findById(id)
        .then(user => user.deleteOne())
        .then(user =>
            res.status(201).json({ message: "User successfully deleted", user })
        )
        .catch(error =>
            res
                .status(400)
                .json({ message: "An error occurred", error: error.message })
        )
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json({
            message: "Users successfully fetched",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching users",
            error: err.message,
        });
    }
};