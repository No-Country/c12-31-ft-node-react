import { verify } from "jsonwebtoken";
import { NextFunction, Response, Request } from "express";
import { config } from "../config/env.config";
import Boom from "@hapi/boom";
export async function VerifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;
  if (!token) return next(Boom.badRequest("No token provided"));
  try {
    const decoded = verify(token, config.jwt.secret);
    const { id } = decoded as { id: string };
    req.body.id = id;
    next();
  } catch (error) {
    return next(Boom.badRequest("Invalid token"));
  }
}
