import { Router } from 'express';
import { AcademicSemController } from './academicSem.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemValidations } from './academicSem.validation';

const router = Router();

router.post(
  '/create-academic-sem',
  validateRequest(AcademicSemValidations.academicSemValidationSchema),
  AcademicSemController.createAcademicSem,
);

export const AcademicSemRoutes = router;
