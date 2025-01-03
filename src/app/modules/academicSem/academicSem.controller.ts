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

const getAllAcademicSem = catchAsync(async (req, res) => {
  const result = await AcademicSemServices.getAllAcademicSemFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All Academic Semester is retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSem = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemServices.getSingleAcademicSem(semesterId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Requested Academic Semester is retrieved successfully',
    data: result,
  });
});

const updateAcademicSem = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const semesterData = req.body;

  const result = await AcademicSemServices.updateAcademicSem(
    semesterId,
    semesterData,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Semester is updated successfully',
    data: result,
  });
});

export const AcademicSemController = {
  createAcademicSem,
  getAllAcademicSem,
  getSingleAcademicSem,
  updateAcademicSem,
};
