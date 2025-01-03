import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  academicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
} from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty,
);
router.get('', AcademicFacultyController.getAllAcademicFaculties);
router.get(
  '/:facultyId',
  validateRequest(academicFacultyValidationSchema),
  AcademicFacultyController.getSingleAcademicFaculty,
);
router.patch(
  '/:facultyId',
  validateRequest(updateAcademicFacultyValidationSchema),
  AcademicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
