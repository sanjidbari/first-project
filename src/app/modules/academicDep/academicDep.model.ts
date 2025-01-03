import { model, Schema } from 'mongoose';
import { AcademicDep } from './academicDep.interface';

const academicDepSchema = new Schema<AcademicDep>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
  },
});

export const academicDepModel = model<AcademicDep>(
  'AcademicDep',
  academicDepSchema,
);
