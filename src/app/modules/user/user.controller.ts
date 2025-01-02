import { UserServices } from './user.services';
import sendResponse from '../../utlis/sendResponse';
import StatusCode from 'http-status-codes';
import catchAsync from '../../utlis/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { student: studentData, password } = req.body;
  const result = await UserServices.createStudentIntoDB(studentData, password);

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
