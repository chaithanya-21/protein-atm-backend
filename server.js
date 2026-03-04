const express = require("express");
const cors = require("cors");
require("dotenv").config();

const shakeRoutes = require("./routes/shakes");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Protein ATM API Running 🚀");
});

app.use("/api/shakes", shakeRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
