import { AcademicFaculty } from './academicFaculty.interface';
import { academicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: AcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFacultiesFromDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};
const getSingleAcademicFacultyFromDB = async (payload: string) => {
  const result = await academicFacultyModel.findOne({ _id: payload });
  return result;
};

const updateAcademicFacultyFromDB = async (
  id: string,
  payload: Partial<AcademicFaculty>,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyFromDB,
};
