import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utlis/catchAsync';
import sendResponse from '../../utlis/sendResponse';
import { AcademicSemServices } from './academicSem.services';

const createAcademicSem = catchAsync(async (req, res) => {
  const result = await AcademicSemServices.createAcademicSemIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});

export const AcademicSemController = {
  createAcademicSem,
};
