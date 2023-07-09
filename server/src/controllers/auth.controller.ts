import { AuthDto } from "dto/auth.dto";
import { CreateUserDto } from "dto/create-user.dto";
import { NextFunction, Response } from "express";
import { AuthService } from "services/auth.service";
import { RequestWithTypedBody } from "types/custom-request.type";
import { serializeResponse } from "utils/serialize-response";

export class AuthController {
  static async login(
    req: RequestWithTypedBody<AuthDto>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AuthService.login(req.body);
      res.status(200).json(serializeResponse(data));
    } catch (error) {
      next(error);
    }
  }

  static async register(
    req: RequestWithTypedBody<CreateUserDto>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await AuthService.register(req.body);
      res.status(201).json(serializeResponse(data, 201));
    } catch (error) {
      next(error);
    }
  }
}
