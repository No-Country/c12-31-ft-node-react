import bcrypt from "bcrypt";

export async function encrypt(plain: string): Promise<string> {
  return await bcrypt.hash(plain, 10);
}
export async function compare(
  plain: string,
  encrypted: string
): Promise<boolean> {
  return await bcrypt.compare(plain, encrypted);
}
