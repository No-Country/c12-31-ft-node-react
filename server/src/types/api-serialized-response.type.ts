export interface ApiSerializedResponse<T> {
  status: number;
  error: T;
  data?: T;
}
