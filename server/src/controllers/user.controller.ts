import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";
import { UserService } from "src/services/user.service";
import { serializeResponse } from "src/utils/serialize-response";

export class UserController {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userDto: CreateUserDto = req.body;
      const user = await UserService.create(userDto);
      console.log(req.body);
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
      const id = Number(req.params.id);
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
      const id = Number(req.params.id);
      const userDto: UpdateUserDto = req.body;
      const user = await UserService.update(id, userDto);
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
