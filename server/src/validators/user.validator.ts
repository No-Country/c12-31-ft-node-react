import { body, param } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const createUserValidator = [
  body(["name", "country"])
    .notEmpty()
    .withMessage("Must be a not empty string")
    .bail()
    .isString()
    .trim(),
  body("lastname").isString().trim(),
  body("email").isEmail().withMessage("is required length do define"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("is required length do define"),
  validateRequestMiddleware,
];

export const idValidator = [
  param("id")
    .exists()
    .isUUID()
    .withMessage((value) => `${value} is not a valid UUID`),
  validateRequestMiddleware,
];

export const updateUserValidator = [
  body("email").isEmail().normalizeEmail(),
  body("password").isString(),
  validateRequestMiddleware,
];
