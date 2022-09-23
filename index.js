import "dotenv/config";
import express from "express";
import router from "router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use(router);

// index
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT);
console.log(`Server is listening on port ${process.env.PORT}`);
