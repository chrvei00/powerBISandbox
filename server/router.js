import { Router } from "express";
import { updateEmployees } from "./services/pogoService.js";

const router = Router();

router.get("/employees", (req, res) => {
  updateEmployees();
  res.send("Updating employee data");
});

export default router;
