import { AcademicDep } from './academicDep.interface';
import { academicDepModel } from './academicDep.model';

const createAcademicDepIntoDB = async (payload: AcademicDep) => {
  const result = await academicDepModel.create(payload);
  return result;
};

const getAllAcademicDepFromDB = async () => {
  const result = await academicDepModel.find();
  return result;
};
const getSingleAcademicDepFromDB = async (payload: string) => {
  const result = await academicDepModel.findOne({ _id: payload });
  return result;
};

const updateAcademicDepFromDB = async (
  id: string,
  payload: Partial<AcademicDep>,
) => {
  const result = await academicDepModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepServices = {
  createAcademicDepIntoDB,
  getAllAcademicDepFromDB,
  getSingleAcademicDepFromDB,
  updateAcademicDepFromDB,
};
