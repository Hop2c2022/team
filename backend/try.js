const express = require("express");
const UserRouter = require("./router/userRouter");
const urlRouter = require("./router/urlRouter");
const { connectDb } = require("./database/db");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(urlRouter);

const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
};

startServer();

module.exports = app;
