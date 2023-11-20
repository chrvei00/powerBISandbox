import express from "express";
import router from "./router.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.send("404 not found").status(404);
});

app.listen(3000, () => console.log("Server running on port 3000"));
