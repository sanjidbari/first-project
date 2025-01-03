import { Schema, Types, model } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const guardianSchema = new Schema<Guardian>(
  {
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccupation: {
      type: String,
      required: true,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const studentSchema = new Schema<Student>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    dOB: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    profileImg: { type: String },
    admissionSem: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSem',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const StudentModel = model<Student>('Student', studentSchema);
