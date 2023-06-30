import { NextFunction, Request, Response } from "express";
import { CreateItemDto } from "src/dtos/create-item.dto";
import { UpdateItemDto } from "src/dtos/update-item.dto";
import { ItemService } from "src/services/item.service";
import { RequestWithTypedBody } from "src/types/custom-request.type";
import { serializeResponse } from "src/utils/serialize-response";

export class ItemController {
  static async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const items = await ItemService.findAll();
      res.json(serializeResponse(items));
    } catch (e) {
      next(e);
    }
  }

  static async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const item = await ItemService.findOne(+req.params.id);
      res.json(serializeResponse(item));
    } catch (e) {
      next(e);
    }
  }

  static async create(
    req: RequestWithTypedBody<CreateItemDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newItem = await ItemService.create(req.body);
      res.status(201).json(serializeResponse(newItem, 201));
    } catch (e) {
      next(e);
    }
  }

  static async update(
    req: RequestWithTypedBody<UpdateItemDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await ItemService.update(+req.params.id, req.body);
      res.status(204).json(serializeResponse({}));
    } catch (e) {
      next(e);
    }
  }
}
