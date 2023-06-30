import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export type RequestWithTypedBody<T> = Request<ParamsDictionary, unknown, T>;
