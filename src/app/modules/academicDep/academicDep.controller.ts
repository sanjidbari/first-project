import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utlis/catchAsync';
import { AcademicDepServices } from './academicDep.services';
import sendResponse from '../../utlis/sendResponse';

const createAcademicDep = catchAsync(async (req, res) => {
  const result = await AcademicDepServices.createAcademicDepIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department is created successfully',
    data: result,
  });
});

const getAllAcademicDep = catchAsync(async (req, res) => {
  const result = await AcademicDepServices.getAllAcademicDepFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All Academic department is retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDep = catchAsync(async (req, res) => {
  const { DepId } = req.params;
  const result = await AcademicDepServices.getSingleAcademicDepFromDB(DepId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Requested Academic department is retrieved successfully',
    data: result,
  });
});
const updateAcademicDep = catchAsync(async (req, res) => {
  const { DepId } = req.params;
  const payload = req.body;
  const result = await AcademicDepServices.updateAcademicDepFromDB(
    DepId,
    payload,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Requested Academic department is updated successfully',
    data: result,
  });
});

export const AcademicDepController = {
  createAcademicDep,
  getAllAcademicDep,
  getSingleAcademicDep,
  updateAcademicDep,
};
