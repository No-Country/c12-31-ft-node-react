import { body, param } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const getWalletByIdValidator = [
  param("id").isUUID().withMessage("Invalid id"),
  validateRequestMiddleware,
];

export const depositPesosValidator = [
  body("amount").isNumeric().withMessage("Invalid amount"),
  body("receiverId").optional().isUUID().withMessage("Invalid receiverId"),
  validateRequestMiddleware,
];

export const payServiceValidator = [
  body("amount").isNumeric().withMessage("Invalid amount"),
  body("serviceProvider").isString().withMessage("Invalid serviceProvider"),
  validateRequestMiddleware,
];

