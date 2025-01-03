import config from '../../config';
import { AcademicSemWithId } from '../academicSem/academicSem.interface';
import { academicSemModel } from '../academicSem/academicSem.model';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { User } from './user.interface';
import { UserModel } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (payload: Student, password: string) => {
  const user: Partial<User> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';
  const admissionSem = await academicSemModel.findById(payload.admissionSem);
  if (admissionSem) {
    user.id = await generateStudentId(admissionSem);
  } else {
    throw new Error('Admission semester not found');
  }
  const newUser = await UserModel.create(user);
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
