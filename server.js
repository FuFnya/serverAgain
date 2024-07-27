const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const cors = require("cors"); // Import CORS middleware

dotenv.config({ path: "./config.env" });
const app = require("./app");

// Enable CORS middleware
// app.use(cors());
// app.use(cors());


const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected!!!");
  });


//start the server
// const port = process.env.PORT || 3000;
const port = process.env.PORT;
const hostname = 'localhost';
app.listen(port, hostname , () => {
  console.log(`App is running on http://${hostname}:${port}`);
});
