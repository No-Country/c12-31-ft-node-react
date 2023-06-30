import swaggerJSDoc from "swagger-jsdoc";

export const swaggerDoc = swaggerJSDoc({
  definition: {
    info: {
      title: "Billetera Virtual Docs",
      version: "1.0.0",
    },
    tags: [{ name: "Item", description: "Items" }],
  },
  apis: [__dirname + "/../routes/*.route.ts"],
});
