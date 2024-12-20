import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .required()
      .messages({
        'string.pattern.base': '{#label} must only contain alphabetic characters.',
        'string.empty': 'First name is required.',
      }),
    middleName: Joi.string().allow(null, '').optional(),
    lastName: Joi.string()
      .required()
      .messages({ 'string.empty': 'Last name is required.' }),
  });
  
  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({ 'string.empty': 'Father name is required.' }),
    fatherOccupation: Joi.string()
      .required()
      .messages({ 'string.empty': 'Father occupation is required.' }),
    fatherContactNo: Joi.string()
      .required()
      .messages({ 'string.empty': 'Father contact number is required.' }),
    motherName: Joi.string().required().messages({ 'string.empty': 'Mother name is required.' }),
    motherOccupation: Joi.string()
      .required()
      .messages({ 'string.empty': 'Mother occupation is required.' }),
    motherContactNo: Joi.string()
      .required()
      .messages({ 'string.empty': 'Mother contact number is required.' }),
  });
  
  const studentValidationSchema = Joi.object({
    id: Joi.string().required().messages({ 'string.empty': 'ID is required.' }),
    name: userNameValidationSchema.required(),
    gender: Joi.string()
      .valid('male', 'female')
      .required()
      .messages({ 'any.only': '{#label} must be either male or female.' }),
    dOB: Joi.string()
      .isoDate()
      .required()
      .messages({ 'string.isoDate': 'Date of birth must be a valid ISO date.', 'string.empty': 'Date of birth is required.' }),
    email: Joi.string()
      .email()
      .required()
      .messages({ 'string.email': 'Email must be a valid email address.', 'string.empty': 'Email is required.' }),
    contactNo: Joi.string()
      .required()
      .messages({ 'string.empty': 'Contact number is required.' }),
    emergencyNo: Joi.string()
      .required()
      .messages({ 'string.empty': 'Emergency contact number is required.' }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .messages({ 'any.only': '{#label} must be a valid blood group.' }),
    guardian: guardianValidationSchema.required(),
    profileImg: Joi.string().uri().optional(),
    isActive: Joi.string()
      .valid('active', 'inactive')
      .default('active')
      .messages({ 'any.only': '{#label} must be either active or inactive.' }),
  });

  export default studentValidationSchema;