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
router.get('/get-academic-sem', AcademicSemController.getAllAcademicSem);
router.get('/:semesterId', AcademicSemController.getSingleAcademicSem);
router.patch(
  '/:semesterId',
  validateRequest(AcademicSemValidations.updateAcademicSemValidationSchema),
  AcademicSemController.updateAcademicSem,
);

export const AcademicSemRoutes = router;
