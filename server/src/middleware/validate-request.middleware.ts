import { NextFunction, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { RequestWithTypedBody } from "types/custom-request.type";

export async function validateRequestMiddleware<T>(
  req: RequestWithTypedBody<T>,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    req.body = matchedData(req, { locations: ["body"] }) as T;
    return next();
  }
  // TODO: Apply error formatting
  else return next(result.array());
}
