import { sequelize } from "src/config/sequelize.config";
import { CreateItemDto } from "src/dtos/create-item.dto";
import request from "supertest";
import { ItemMother } from "./mothers/item.mother";
import { ItemService } from "src/services/item.service";
import { serializeResponse } from "src/utils/serialize-response";
import Item from "src/models/item.model";
import { app } from "src/config/app.config";
import { ItemDto } from "src/dtos/item.dto";
import { ApiSerializedResponse } from "src/types/api-serialized-response.type";

describe("Item/", () => {
  const items: Item[] = [];
  //With this we ensure a consistent database state across tests
  beforeEach(async () => {
    await sequelize.authenticate();
    // WARNING: this action completely destroy database, therefore ensures that testing database is begin used
    await sequelize.sync({ force: true });

    let createItemDto: CreateItemDto;

    //Loading some entities into database
    for (let i = 0; i != 10; ++i) {
      createItemDto = ItemMother.buildCreateItemDto();
      await ItemService.create(createItemDto);
    }

    items.push(...(await ItemService.findAll()));
  });

  describe("GET/", () => {
    it("GET/ (200)", async () => {
      await request(app)
        .get("/api/item")
        .expect(200)
        .expect((res) =>
          expect(res.body).toMatchObject(serializeResponse(items))
        );
    });
  });

  describe("GET/:id", () => {
    it("200 OK", async () => {
      const item = await ItemService.create(ItemMother.buildCreateItemDto());

      await request(app)
        .get(`/api/item/${item.id}`)
        .expect(200)
        .expect((res) =>
          expect(res.body).toMatchObject(serializeResponse(item))
        );
    });

    it("404 Not found", async () => {
      const id = items.length + 100;
      await request(app)
        .get(`/api/item/${id}`)
        .expect(404)
        .expect((res) =>
          expect(res.body).toMatchObject(
            serializeResponse(`Item with id ${id} not found`, 404, true)
          )
        );
    });
  });

  describe("POST/", () => {
    it("201 Created", async () => {
      const createItemDto = ItemMother.buildCreateItemDto();

      await request(app)
        .post("/api/item")
        .send(createItemDto)
        .expect(201)
        .expect((res) =>
          expect(res.body).toMatchObject(
            serializeResponse<ItemDto>(
              {
                id: expect.any(Number),
                ...createItemDto,
              },
              201
            )
          )
        );
    });

    it("400 Bad request (price is negative)", async () => {
      const createItemDto = ItemMother.buildCreateItemDto();
      createItemDto.price = -10;

      await request(app)
        .post("/api/item")
        .send(createItemDto)
        .expect(400)
        .expect((res) =>
          expect(res.body).toStrictEqual<ApiSerializedResponse<Array<string>>>({
            status: 400,
            data: null,
            error: expect.any(Array),
          })
        );
    });
  });

  describe("PUT/", () => {
    it("200 OK", async () => {
      const newDescription = `${Date.now()}-GustavoSerrano`;

      await request(app)
        .put(`/api/item/${items[0].id}`)
        .send({ description: newDescription })
        .expect(204)
        .expect((res) => expect(res.body).toStrictEqual({}));
    });

    it("404 Not found", async () => {
      const id = items.length + 100;

      await request(app)
        .put(`/api/item/${id}`)
        .send({ description: "This request never reaches endpoint" })
        .expect(404)
        .expect((res) =>
          expect(res.body).toStrictEqual(
            serializeResponse(`Item with id ${id} not found`, 404, true)
          )
        );
    });
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
