import Boom from "@hapi/boom";
import { NextFunction, Response } from "express";
import {
  ValidationError,
  matchedData,
  validationResult,
} from "express-validator";
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
  } else {
    const formattedOutput = result.formatWith(formatErrorOutput);

    return next(Boom.badRequest(formattedOutput.array().join()));
  }
}

function formatErrorOutput(error: ValidationError) {
  switch (error.type) {
    case "field":
      return `${error.msg} for field "${error.path}" in <${error.location}>`;

    case "alternative":
      return `Nested Errors: ${error.nestedErrors}\nMsg: ${error.msg}`;

    case "unknown_fields":
      return error.fields
        .map((e) => `Unknown field "${e.value}" in <${e.location}>`)
        .join();

    case "alternative_grouped":
      return `${error.nestedErrors}\nMsg: ${error.msg}`;
  }
}
