import { body } from "express-validator";
import { validateRequestMiddleware } from "../middleware/validate-request.middleware";

export const updateWalletValidator = [
  body("balancePesos").isNumeric().optional(),
  body("balanceDollars").isNumeric().optional(),
  validateRequestMiddleware,
];

export const updateWalletBalancePesosValidator = [
  body("updateBalance")
    .isNumeric()
    .notEmpty()
    .withMessage("Balance pesos is required"),
  validateRequestMiddleware,
];

export const updateWalletBalanceDollarsValidator = [
  body("updateBalance")
    .isNumeric()
    .notEmpty()
    .withMessage("Balance dollars is required"),
  validateRequestMiddleware,
];
