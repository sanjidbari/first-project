import z from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z]+$/, {
      message: 'First name must only contain alphabetic characters.',
    })
    .nonempty('First name is required.'),
  middleName: z.string().optional(),
  lastName: z.string().nonempty('Last name is required.'),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty('Father name is required.'),
  fatherOccupation: z.string().nonempty('Father occupation is required.'),
  fatherContactNo: z.string().nonempty('Father contact number is required.'),
  motherName: z.string().nonempty('Mother name is required.'),
  motherOccupation: z.string().nonempty('Mother occupation is required.'),
  motherContactNo: z.string().nonempty('Mother contact number is required.'),
});

const studentValidationSchema = z.object({
  id: z.string().nonempty('ID is required.'),
  password: z.string().nonempty('password is required.'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({ message: 'Gender must be either male or female.' }),
  }),
  dOB: z
    .string()
    .nonempty('Date of birth is required.')
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Date of birth must be a valid ISO date.',
    }),
  email: z.string().email('Email must be a valid email address.'),
  contactNo: z.string().nonempty('Contact number is required.'),
  emergencyNo: z.string().nonempty('Emergency contact number is required.'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({ message: 'Blood group must be valid.' }),
  }),
  presentAddress: z.string().nonempty('Present address is required.'),
  permanentAddress: z.string().nonempty('Permanent address is required.'),
  guardian: guardianValidationSchema,
  profileImg: z.string().url().optional(),
  isActive: z.enum(['active', 'inActive']).default('active'),
});

export default studentValidationSchema;
