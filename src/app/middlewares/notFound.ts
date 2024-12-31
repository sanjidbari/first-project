/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
    error: '',
  });
  return next();
};

export default notFound;
