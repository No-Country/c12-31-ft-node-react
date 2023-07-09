import { app } from "config/app.config";
import { dbContext } from "config/database.config";
import { UserDto } from "dto/user.dto";
import Wallet from "models/wallet.model";
import request from "supertest";
import { ApiSerializedResponse } from "types/api-serialized-response.type";
import { beforeEach, describe, expect, it } from "vitest";
import { UserMother } from "./mothers/user.mother";

describe("POST /users", () => {
  beforeEach(async () => {
    await dbContext.initialize();
    await dbContext.synchronize(true);
  });

  it("Given correct credentials user should be created successfully", async () => {
    const { password, ...userData } = UserMother.generateCreateUserDto();

    await request(app)
      .post("/api/user")
      .send({ password, ...userData })
      .expect(201)
      .expect((res) => {
        expect(res.body).toMatchObject<ApiSerializedResponse<UserDto>>({
          statusCode: 201,
          data: {
            ...userData,
            id: expect.any(String) as string,
            wallet: expect.any(Wallet) as Wallet,
          },
        });
      });
  });
});
