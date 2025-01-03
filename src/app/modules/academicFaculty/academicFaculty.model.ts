import { model, Schema } from 'mongoose';
import { AcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<AcademicFaculty>(
  {
    name: String,
  },
  {
    timestamps: true,
  },
);

export const academicFacultyModel = model<AcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
