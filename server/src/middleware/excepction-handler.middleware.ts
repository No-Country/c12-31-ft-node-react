import { ErrorRequestHandler } from "express";
import { HttpError } from "types/http-error.type";
import { serializeResponse } from "utils/serialize-response";

export const exceptionHandlerMiddleware: ErrorRequestHandler = (
  err: unknown,
  req,
  res,
  next
) => {
  if (err instanceof HttpError) {
    return res
      .status(err.status)
      .json(serializeResponse(err.message, err.status, true));
  }
  // TODO: Convert express validator array to HttpError Bad reques response
  else if (err instanceof Array && err.length !== 0) {
    return res.status(400).json(serializeResponse(err, 400, true));
  } else {
    return res
      .status(500)
      .json(serializeResponse(`Unknow Error: ${err}`, 500, true));
  }
};
