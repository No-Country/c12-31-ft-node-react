import { CreateUserDto } from "dto/create-user.dto";
import { UpdateUserDto } from "dto/update-user.dto";
import { NextFunction, Request, Response } from "express";
import { UserService } from "services/user.service";
import { WalletService } from "services/wallet.service";
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

  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = req.params.id;
      const userDto: UpdateUserDto = req.body;
      const user = await UserService.update(id, userDto);
      res.json(serializeResponse(user));
    } catch (error) {
      next(error);
    }
  }
  static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await UserService.login(email, password);
      res.json(serializeResponse(user));
    } catch (error) {
      next(error);
    }
  }
  // static async remove(req: Request, res: Response, next:NextFunction): Promise<void> {
  //     try {
  //         const id = Number(req.params.id);
  //     await UserService.remove(id);
  //     res.status(204).end();
  //     } catch (error) {
  //         next(error);
  //     }
  // }
}
