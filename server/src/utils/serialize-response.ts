import { instanceToPlain } from "class-transformer";
import { ApiSerializedResponse } from "types/api-serialized-response.type";

export function serializeResponse<T>(
  data: T,
  status?: number,
  isError?: boolean
): ApiSerializedResponse<T> {
  if (isError) {
    return {
      status: status ?? 500,
      data: null,
      error: data,
    };
  } else {
    return {
      status: status ?? 200,
      error: null,
      // NOTE: Please watchout this cast
      data: instanceToPlain(data, { excludeExtraneousValues: true }) as T,
    };
  }
}
