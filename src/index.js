require("dotenv").config();
const express = require("express");
require("express-async-errors");
const database = require("./startup/database");
const cors = require("cors");
const routes = require("./routes/book.route");
const error = require("./middleware/error");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api",routes);
app.use(error);

async function main() {
  await database();

  const { PORT } = process.env;

  app.listen(PORT, function () {
    console.log(`Server listening on Port ${PORT}`);
  });
}

main();
