import { Router } from "express";
import { update, autorizePogoClient } from "./services/pogoService.js";

const router = Router();

router.get("/pogo", (req, res) => {
  update();
  res.send("Updating pogo data");
});

router.get("/pogo/auth", (req, res) => {
  autorizePogoClient();
  res.send("Updating pogo data");
});

export default router;
