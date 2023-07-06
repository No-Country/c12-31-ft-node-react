import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { RequestWithTypedBody } from "src/types/custom-request.type";
import { matchedData } from "express-validator";

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
