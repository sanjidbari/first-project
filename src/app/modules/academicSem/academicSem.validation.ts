import { z } from 'zod';
import {
  AcademicSemCode,
  AcademicSemName,
  Months,
} from './academicSem.constant';

const academicSemValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemValidations = {
  academicSemValidationSchema,
};
