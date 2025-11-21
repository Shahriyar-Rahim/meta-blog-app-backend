require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");


// middleware
app.use(express.json());
app.use(cors({
  origin:"*"
}));


// routes
const blogRoutes = require("./src/routes/blog.routes");
app.use('/blogs', blogRoutes);



// mongoose configuration
async function main() {
  await mongoose.connect(process.env.DB_URL);

  // routes
  app.get("/", (req, res) => {
    res.send("Meta blog server is running...");
  });
}
main()
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
