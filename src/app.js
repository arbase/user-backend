const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 11,
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    id: 12,
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    id: 13,
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/add", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send("User added");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
