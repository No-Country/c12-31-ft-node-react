import { body } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const getWalletByIdValidator = [
  body("id").isUUID().withMessage("Invalid id"),
  validateRequestMiddleware,
];

export const depositPesosValidator = [
  body("amount").isNumeric().withMessage("Invalid amount"),
  body("senderId").isUUID().withMessage("Invalid senderId"),
  body("receiverId").optional().isUUID().withMessage("Invalid receiverId"),
  validateRequestMiddleware,
];
