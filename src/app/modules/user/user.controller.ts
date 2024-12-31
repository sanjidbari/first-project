import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';
import sendResponse from '../../utlis/sendResponse';
import StatusCode from 'http-status-codes';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { student: studentData, password } = req.body;
    const result = await UserServices.createStudentIntoDB(
      studentData,
      password,
    );

    sendResponse(res, {
      statusCode: StatusCode.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
