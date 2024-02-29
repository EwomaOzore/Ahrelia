const express = require("express")
const connectDB = require("./db");
const app = express()
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");
const cors = require('cors');

const PORT = 5000

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.set("view engine", "ejs")

connectDB();

app.use(express.json())

app.use(cookieParser());

app.use(cors());

app.use("/api/auth", require("./auth/route"))

app.use("/api/review", require("./review/route"))

app.use("/api/gallery", require("./gallery/route"))

app.get("/", (req, res) => res.render("home"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
    res.cookie("jwt", "", { maxAge: "1" });
    res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));


const server = app.listen(PORT, () =>
    console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});