import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utlis/sendResponse';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    // res.status(200).json({
    //   success: true,
    //   message: 'Requested student is retrieved successfully',
    //   data: result,
    // });
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Requested student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Requested student is deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
};
