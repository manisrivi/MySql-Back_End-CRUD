require("dotenv").config();
const express = require("express");
const route = require("./routes/index");
const cors = require("cors");

const PORT = process.env.PORT || 6248;
const app = express();

(async () => {
  try {
    // middleware
    app.use(cors());
    app.use(express.json());
    console.log("middleware connected successfully");

    // routes
    app.get("/", (req, res) => res.send("Welcome To Book Shop"));
    app.use("/books", route.bookRoute);
    console.log("routes connected successfully");

    // server listening
    app.listen(process.env.PORT, () =>
      console.log(`server listening at a ${process.env.PORT}`)
    );
  } catch (error) {
    console.log("error starting application", error.message);
  }
})();
