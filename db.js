const { mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = process.env.dbs;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected with database"))
  .then((e) => console.log(e));
