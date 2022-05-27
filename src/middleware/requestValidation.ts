import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";


//this middleware check the request body and params using the schemas defined in './src/schemas'

const validate = (schema: AnySchema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validate({
      body: req.body,
      params: req.params,
    });

    return next();
  } catch (e: any) {
    return res.status(400).send(e.errors);
  }
};

export default validate;