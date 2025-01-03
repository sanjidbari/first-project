import { Types } from 'mongoose';

export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemCode = '01' | '02' | '03';

export type AcademicSem = {
  name: TAcademicSemName;
  code: TAcademicSemCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type AcademicSemWithId = AcademicSem & {
  _id: Types.ObjectId;
};
