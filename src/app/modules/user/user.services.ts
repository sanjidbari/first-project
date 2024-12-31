import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { User } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (studentData: Student, password: string) => {
  const user: Partial<User> = {};

  user.password = password || (config.default_pass as string);

  user.role = 'student';

  user.id = '2003010001';
  const newUser = await UserModel.create(user);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
