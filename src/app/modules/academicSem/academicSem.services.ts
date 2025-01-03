import { AcademicSem } from './academicSem.interface';
import { academicSemModel } from './academicSem.model';

const createAcademicSemIntoDB = async (payload: AcademicSem) => {
  type TAcademicSemNameCodeMapper = {
    [key: string]: string;
  };

  const academicSemNameCodeMapper: TAcademicSemNameCodeMapper = {
    Autumn: '01',
    Fall: '02',
    Summer: '03',
  };

  if (academicSemNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = academicSemModel.create(payload);

  return result;
};

const getAllAcademicSemFromDB = async () => {
  const result = await academicSemModel.find();
  return result;
};

const getSingleAcademicSem = async (payload: string) => {
  const result = await academicSemModel.findById({ _id: payload });
  return result;
};

const updateAcademicSem = async (
  semesterId: string,
  semesterData: AcademicSem,
) => {
  const result = await academicSemModel.findOneAndUpdate(
    { _id: semesterId },
    semesterData,
    { new: true },
  );
  return result;
};

export const AcademicSemServices = {
  createAcademicSemIntoDB,
  getAllAcademicSemFromDB,
  getSingleAcademicSem,
  updateAcademicSem,
};
