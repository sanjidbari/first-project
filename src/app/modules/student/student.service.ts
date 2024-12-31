import { StudentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find({ isDeleted: false });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id }, { isDeleted: false });

  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne(
    { id: id },
    { $set: { isDeleted: true } },
  );

  return result.modifiedCount > 0
    ? { success: true, message: 'Student deleted successfully' }
    : { success: false, message: 'Student can not be found' };
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
