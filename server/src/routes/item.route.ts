import { Router } from "express";
import { ItemController } from "src/controllers/item.controller";
import { createItemValidator } from "src/validators/item.validator";

const router = Router();

// NOTE: This is a basic documentation, should be improved
/**
 * @openapi
 * /:
 *   get:
 *     description: Get all items
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/item", ItemController.findAll);
/**
 * @openapi
 * /:id:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Item]
 *     responses:
 *       200:
 *         description: Returns item entity
 */
router.get("/item/:id", ItemController.findOne);

/**
 * @openapi
 * /:
 *   post:
 *     description: Get all items
 *     tags: [Item]
 *     responses:
 *       201:
 *         description: Returns item entity
 */
router.post("/item", createItemValidator, ItemController.create);

/**
 * @openapi
 * /:
 *   put:
 *     description: Get all items
 *     tags: [Item]
 *     responses:
 *       201:
 *         description: Returns item entity
 */
router.put("/item/:id", ItemController.update);

export { router as itemRouter };
