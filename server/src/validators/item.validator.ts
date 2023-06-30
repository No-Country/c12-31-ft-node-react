import { body } from "express-validator";
import { validateRequestMiddleware } from "src/middleware/validate-request.middleware";

export const itemConstraints = {
  name: {
    minLength: 5,
    maxLength: 10,
  },
  price: {
    min: 1,
    max: 80,
  },
  description: {
    minLength: 5,
    maxLength: 10,
  },
};

// NOTE: Remember to add 'validateRequestMiddleware' at the end of array
export const createItemValidator = [
  body(["name", "description"])
    .isLength({ min: itemConstraints.name.minLength })
    .trim(),
  body("price").isFloat({ min: itemConstraints.price.min }),
  validateRequestMiddleware,
];
