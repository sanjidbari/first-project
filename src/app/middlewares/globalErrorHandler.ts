/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
  return next();
};

export default globalErrorHandler;
