import { instanceToPlain } from "class-transformer";
import { ApiSerializedResponse } from "types/api-serialized-response.type";

export function serializeResponse<T>(
  data: T,
  statusCode = 200
): ApiSerializedResponse<T> {
  return {
    statusCode: statusCode ?? 200,
    // NOTE: Please watchout this cast
    data: instanceToPlain(data, { excludeExtraneousValues: true }) as T,
  };
}
