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

export const AcademicSemServices = {
  createAcademicSemIntoDB,
};
