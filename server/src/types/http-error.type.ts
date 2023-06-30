export class HttpError extends Error {
  constructor(public readonly status: number, message?: string) {
    super(message ?? "Unknow Error, please contact with system administrator");
  }
}
