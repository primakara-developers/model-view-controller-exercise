import 'dotenv/config'
import express from "express";
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
	res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
	res.render("pages/about");
});

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);
