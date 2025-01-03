import { Types } from 'mongoose';

export type AcademicDep = {
  name: string;
  academicFaculty: Types.ObjectId;
};
