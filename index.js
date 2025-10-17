const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog backend server is running");
});

app.put("/blog", (req, res) => {
  res.send("Blog updated");
});

app.post("/blog", (req, res) => {
  res.send("Blog created");
});

app.delete("/blog", (req, res) => {
  res.send("Blog deleted");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
