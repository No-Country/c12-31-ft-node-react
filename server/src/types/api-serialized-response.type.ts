export interface ApiSerializedResponse<T> {
  statusCode: number;
  data: T;
}

export interface ApiErrorSerializedResponse {
  statusCode: number;
  error: string;
  message: string;
}
