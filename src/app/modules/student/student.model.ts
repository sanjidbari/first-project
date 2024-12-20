import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';
import bcrypt from 'bcrypt';
import { config, configDotenv } from 'dotenv';


const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required']
    },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
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
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  name: {userNameSchema},
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid'
    },
    required: true
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
  guardian: {guardianSchema},
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  }
});

studentSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(user.password, 10)
  next()
});

studentSchema.post('save', function(doc, next) {
  doc.password = '';
  next();
})

export const StudentModel = model<Student>('Student', studentSchema);
