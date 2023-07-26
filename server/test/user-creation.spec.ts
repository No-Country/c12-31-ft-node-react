import { app } from "config/app.config";
import { dbContext } from "config/database.config";
import request from "supertest";
import {
  ApiErrorSerializedResponse,
  ApiSerializedResponse,
} from "types/api-serialized-response.type";
import { UserMother } from "./mothers/user.mother";
import { UserService } from "services/user.service";
import { AuthResponseDto } from "dto/auth-response.dto";

beforeAll(async () => {
  await dbContext.initialize();
  await dbContext.synchronize(true);
}, 10000);

describe("User registrartion", () => {
  it("Given correct credentials user should be created successfully", async () => {
    const { password, ...userData } = UserMother.generateCreateUserDto();

    await request(app)
      .post("/api/auth/register")
      .send({ password, ...userData })
      .expect(201)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiSerializedResponse<AuthResponseDto>>({
          statusCode: 201,
          data: {
            user: {
              ...userData,
              id: expect.any(String),
              wallet: {
                cardNumber: expect.any(String),
                cvv: expect.any(String),
                expirationDate: expect.any(String),
                id: expect.any(String),
                balanceDollars: "5",
                balancePesos: "2500",
              },
            },
            access_token: expect.any(String),
          },
        });
      });
  });

  it("Given incorrect credentials server should reject registration", async () => {
    const createUserDto = UserMother.generateCreateUserDto();

    createUserDto.email = "";

    await request(app)
      .post("/api/auth/register")
      .send(createUserDto)
      .expect(400)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiErrorSerializedResponse>({
          statusCode: 400,
          message: expect.any(String),
          error: "Bad Request",
        });
      });
  });

  it("Given a current registered email, server should reject registration", async () => {
    const createUserDto = UserMother.generateCreateUserDto();

    const user = await UserService.create(createUserDto);

    await request(app)
      .post("/api/auth/register")
      .send(createUserDto)
      .expect(400)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiErrorSerializedResponse>({
          statusCode: 400,
          message: expect.stringContaining(user.email),
          error: "Bad Request",
        });
      });
  });
});

describe("User login", () => {
  const createUserDto = UserMother.generateCreateUserDto();
  const plainPassword = createUserDto.password;

  beforeAll(async () => {
    await UserService.create(createUserDto);
  });

  it("Given valid credential user should be authenticated successfully", async () => {
    const { email } = createUserDto;
    await request(app)
      .post("/api/auth/login")
      .send({ email, password: plainPassword })
      .expect(200)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiSerializedResponse<AuthResponseDto>>({
          statusCode: 200,
          data: {
            user: {
              name: createUserDto.name,
              lastname: createUserDto.lastname,
              country: createUserDto.country,
              email,
              id: expect.any(String),
              wallet: {
                cardNumber: expect.any(String),
                cvv: expect.any(String),
                expirationDate: expect.any(String),
                balancePesos: "2500",
                balanceDollars: "5",
                id: expect.any(String),

              },
            },
            access_token: expect.any(String),
          },
        });
      });
  });

  it("Given valid credentials but invalid password server should reject authentication", async () => {
    await request(app)
      .post("/api/auth/login")
      .send({
        email: createUserDto.email,
        password: `This is not the password-${Date.now()}`,
      })
      .expect(400)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiErrorSerializedResponse>({
          statusCode: 400,
          message: expect.stringContaining("password"),
          error: "Bad Request",
        });
      });
  });

  it("Given an user that does not exist in database server should reject authentication", async () => {
    await request(app)
      .post("/api/auth/login")
      .send({
        email: `this.is.not.email${Date.now()}@gustavo.com`,
        password: `This is not the password-${Date.now()}`,
      })
      .expect(400)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiErrorSerializedResponse>({
          statusCode: 400,
          message: expect.stringContaining("Invalid username or password"),
          error: "Bad Request",
        });
      });
  });
});

afterAll(async () => {
  await dbContext.destroy();
});
