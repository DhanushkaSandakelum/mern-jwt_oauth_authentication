const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/user.js");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);

// DATABASE
mongoose.set("strictQuery", false);
mongoose
  .connect(
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE
      : process.env.DATABASE_LOCAL,
    { useNewUrlParser: true }
  )
  .then(() =>
    console.log(colors.green("✔️  Database is connected successfully"))
  );

  // RUNNING SERVER
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    colors.green(`✔️  App running on port `) +
      colors.cyan(`${PORT}`) +
      colors.green(` as `) +
      colors.cyan(`${process.env.NODE_ENV}`) +
      colors.green(` mode`)
  );
});