import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { RequestWithTypedBody } from "src/types/custom-request.type";

export async function validateRequestMiddleware<T>(
  req: RequestWithTypedBody<T>,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  // TODO: Apply error formatting
  else return next(result.array());
}
