const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require('dotenv').config();

const contactsRouter = require("./src/routes");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.use((__, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, __, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
