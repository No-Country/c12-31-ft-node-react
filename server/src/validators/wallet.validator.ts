import { body } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const createMercadoPagoPaymentValidator = [
  body("senderId")
    .isString()
    .notEmpty()
    .withMessage("senderId must be a string"),
  body("amount").isNumeric().notEmpty().withMessage("amount must be a number"),
  validateRequestMiddleware,
];
