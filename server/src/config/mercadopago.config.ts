import mercadopago from "mercadopago";
import "dotenv/config";

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export default mercadopago;
