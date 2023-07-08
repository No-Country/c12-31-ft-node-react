import { body } from "express-validator";
import { validateRequestMiddleware } from "middleware/validate-request.middleware";

export const createUserValidator = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required length do define"),
  body("lastname")
    .isString()
    .notEmpty()
    .withMessage("lastname is required length do define"),
  body("address")
    .isString()
    .notEmpty()
    .withMessage("address is required length do define"),
  body("email").isEmail().withMessage("email is required length do define"),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("password is required length do define"),
  validateRequestMiddleware,
];

export const updateUserValidator = [
  body("name").isString().optional(),
  body("lastname").isString().optional(),
  body("address").isString().optional(),
  body("email").isEmail().optional(),
  body("password").isString().optional(),
  validateRequestMiddleware,
];
