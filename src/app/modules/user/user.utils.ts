import { Types } from 'mongoose';
import { AcademicSemWithId } from '../academicSem/academicSem.interface';
import { StudentModel } from '../student/student.model';

const findLastStudent = async (id: string) => {
  const lastStudent = await StudentModel.find(
    {
      admissionSem: new Types.ObjectId(id),
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .limit(1)
    .lean();
  return lastStudent.length > 0 ? lastStudent[0].id.substring(6) : undefined;
};

export const generateStudentId = async (payload: AcademicSemWithId) => {
  const { _id } = payload;

  const currentId = (await findLastStudent(_id.toString())) || '0';
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
