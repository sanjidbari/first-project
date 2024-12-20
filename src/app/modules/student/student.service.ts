import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student);
  const student = new StudentModel(studentData);
  const result = await student.save();
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });

  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
