const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = 3000;

const MONGO_URL =
  "mongodb+srv://ilia2:zuzuzu229@cluster0.u7lxkoe.mongodb.net/test";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  city: {
    type: String,
    default: "tbilisi",
  },

  createdAT: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, age, city } = req.body;

    const newUser = new User({
      name,
      age,
      city,
    });

    await newUser.save();

    res.status(201).json({
      message: "successfully added user",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "error creating user",
      error: error.message,
    });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await User.find();

  res.json({
    count: users.length,
    data: users,
  });
});

app.listen(PORT, () => {
  console.log(`app is on http://localhost:${PORT}`);
});
