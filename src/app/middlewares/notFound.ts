import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound: ErrorRequestHandler = (err, req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
    error: '',
  });
  return next();
};

export default notFound;
