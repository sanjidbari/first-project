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
const updateAcademicSemValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcademicSemCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemValidations = {
  academicSemValidationSchema,
  updateAcademicSemValidationSchema,
};
