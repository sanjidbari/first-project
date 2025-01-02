import { model, Schema } from 'mongoose';
import { AcademicSem } from './academicSem.interface';
import {
  AcademicSemCode,
  AcademicSemName,
  Months,
} from './academicSem.constant';

const academicSemSchema = new Schema<AcademicSem>(
  {
    name: {
      type: String,
      enum: AcademicSemName,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemCode,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

academicSemSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error('Semester already exist!');
  }
  next();
});

export const academicSemModel = model<AcademicSem>(
  'AcademicSem',
  academicSemSchema,
);
