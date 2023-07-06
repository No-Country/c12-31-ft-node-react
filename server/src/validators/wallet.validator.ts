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
  body("amountToConvert")
    .isNumeric()
    .notEmpty()
    .withMessage("Amount to convert is required"),
  validateRequestMiddleware,
];

export const updateWalletBalanceDlls2ArsValidator = [
  body("amountToConvert")
    .isNumeric()
    .notEmpty()
    .withMessage("Amount to convert is required"),
  validateRequestMiddleware,
];
