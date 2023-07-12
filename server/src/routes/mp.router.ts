import { Router } from "express";
import { createUserValidator } from "validators/user.validator";

const router = Router();

//mensajes dew prueba para mercadopago success, failure, pending
router.get("/success", (req, res) => {
  res.send("success");
});
router.get("/failure", (req, res) => {
  res.send("failure");
});
router.get("/pending", (req, res) => {
  res.send("pending");
});

export { router as mprouter };
