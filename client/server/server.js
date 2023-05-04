const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth");
const questionsRouter = require("./routes/questions");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/support-platform", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/api/auth", authRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/users", usersRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
