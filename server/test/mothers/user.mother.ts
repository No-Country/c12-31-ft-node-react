import { faker } from "@faker-js/faker";
import { CreateUserDto } from "dto/create-user.dto";

export class UserMother {
  static generateCreateUserDto(): CreateUserDto {
    return {
      name: faker.person.firstName(),
      lastname: Math.random() > 0.5 ? faker.person.lastName() : "",
      email: faker.internet.email(),
      password: faker.internet.password(),
      country: faker.location.country(),
    };
  }
}
