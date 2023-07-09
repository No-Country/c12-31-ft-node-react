import { CreateUserDto } from "dto/create-user.dto";
import { ChangePasswordDto } from "dto/update-user.dto";
import { NextFunction, Request, Response } from "express";
import { UserService } from "services/user.service";
import { RequestWithTypedBody } from "types/custom-request.type";
import { serializeResponse } from "utils/serialize-response";

export class UserController {
  static async create(
    req: RequestWithTypedBody<CreateUserDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await UserService.create(req.body);
      // await WalletService.create(user.id, "ARS");
      res.status(201).json(serializeResponse(user));
    } catch (error) {
      next(error);
    }
  }

  static async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await UserService.findAll();
      res.json(serializeResponse(users));
    } catch (error) {
      next(error);
    }
  }

  static async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = req.params.id;
      const user = await UserService.findOne(id);
      res.json(serializeResponse(user));
    } catch (error) {
      next(error);
    }
  }

  static async changePassword(
    { body }: RequestWithTypedBody<ChangePasswordDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await UserService.changePassword(body.email, body.password);
      res.json(serializeResponse(user));
    } catch (error) {
      next(error);
    }
  }
}
