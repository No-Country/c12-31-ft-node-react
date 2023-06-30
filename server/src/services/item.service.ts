import { sequelize } from "src/config/sequelize.config";
import { CreateItemDto } from "src/dtos/create-item.dto";
import { UpdateItemDto } from "src/dtos/update-item.dto";
import Item from "src/models/item.model";
import { HttpError } from "src/types/http-error.type";

export class ItemService {
  private static readonly itemRepository = sequelize.getRepository(Item);

  static async create(createItemDto: CreateItemDto): Promise<Item> {
    return this.itemRepository.create(createItemDto);
  }

  static findAll(): Promise<Item[]> {
    return this.itemRepository.findAll();
  }

  static async findOne(id: number): Promise<Item> {
    const item = await this.itemRepository.findOne({
      where: {
        id,
      },
    });

    if (!item) throw new HttpError(404, `Item with id ${id} not found`);

    return item;
  }

  static async update(id: number, updateItemDto: UpdateItemDto): Promise<void> {
    const count = await this.itemRepository.update(updateItemDto, {
      where: {
        id,
      },
    });

    if (count[0] === 0)
      throw new HttpError(404, `Item with id ${id} not found`);
  }
}
