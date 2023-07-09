import { body, param } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const createUserValidator = [
  body(["name", "lastname"])
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Must be a not empty string"),
  body("address")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("address is required length do define"),
  body("email").isEmail().withMessage("email is required length do define"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("password is required length do define"),
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
