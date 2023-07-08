import { faker } from "@faker/faker";
import { CreateItemDto } from "src/dtos/create-item.dto";
import { ItemDto } from "src/dtos/item.dto";
import { itemConstraints } from "src/validators/item.validator";

export class ItemMother {
  static buildCreateItemDto(): CreateItemDto {
    return {
      name: faker.word.words({
        count: {
          min: itemConstraints.name.minLength,
          max: itemConstraints.name.maxLength,
        },
      }),
      price: faker.number.float({
        min: itemConstraints.price.min,
        max: itemConstraints.price.max,
        precision: 0.01,
      }),
      description: faker.lorem.sentence({
        min: itemConstraints.description.minLength,
        max: itemConstraints.description.maxLength,
      }),
    };
  }

  static buildItemDto(): ItemDto {
    return {
      ...ItemMother.buildCreateItemDto(),
      id: faker.number.int({ min: 1, max: 255 }),
    };
  }
}
