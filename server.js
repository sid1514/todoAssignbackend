const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const routes = require("./routes/routes");
const port = process.env.port;
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log("server on");
});
