import z from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error:
        'Password must be combination of character and numbers',
    })
    .min(8, { message: 'Password can not be less than 8 characters' })
    .optional(),
  defaultPassword: z.boolean().optional().default(true),
});

export default userValidationSchema;
