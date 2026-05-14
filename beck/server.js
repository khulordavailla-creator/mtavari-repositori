import express from "express";

const app = express();

app.get("/users/products", (request, response) => {
  response.send([
    { id: 1, name: "mouse", price: 30 },
    { id: 2, name: "keyboard", price: 70 },
    { id: 3, name: "laptop", price: 100 },
  ]);
});
app.listen(3000, () => {
  console.log("app is listening ar http://localhost:3000");
});
