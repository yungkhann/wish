import type { StatusCode } from "hono/utils/http-status";

export class AppError extends Error {
  status: StatusCode;

  constructor(message: string, status: StatusCode = 400) {
    super(message);
    this.status = status;
  }
}
