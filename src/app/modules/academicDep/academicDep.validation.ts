import { z } from 'zod';

export const academicDepValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department can not be empty',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty can not be empty',
      required_error: 'Faculty is required',
    }),
  }),
});
export const updateAcademicDepValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic department can not be empty',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic faculty can not be empty',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});
