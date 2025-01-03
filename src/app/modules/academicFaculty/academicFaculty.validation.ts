import { z } from 'zod';

export const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty can not be empty',
      required_error: 'Name is required',
    }),
  }),
});
export const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic faculty can not be empty',
        required_error: 'Name is required',
      })
      .optional(),
  }),
});
