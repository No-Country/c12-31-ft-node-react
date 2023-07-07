import bcryptjs from "bcryptjs";

export async function encrypt(textPlain: string): Promise<string> {
  const hash: string = await bcryptjs.hash(textPlain, 8);
  return hash;
}
export async function compare(
  textPlain: string,
  encrypText: string
): Promise<boolean> {
  return await bcryptjs.compare(textPlain, encrypText);
}
