import { faker } from "@faker-js/faker";
import { CreateUserDto } from "dto/create-user.dto";

export class UserMother {
  static generateCreateUserDto(): CreateUserDto {
    return {
      name: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.location.streetAddress(),
    };
  }
}
