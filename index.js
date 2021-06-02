const express = require("express");
const mongoose = require("mongoose");
const tweets = require("./routes/tweets");
const home = require("./routes/home");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use("/api/tweets", tweets);
app.use("/", home);
app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://dbUser:lkb123456789@cluster0.0lvny.mongodb.net/TwitterWordCountDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully!!!");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
