import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  academicDepValidationSchema,
  updateAcademicDepValidationSchema,
} from './academicDep.validation';
import { AcademicDepController } from './academicDep.controller';

const router = Router();

router.post(
  '/create-academic-Dep',
  validateRequest(academicDepValidationSchema),
  AcademicDepController.createAcademicDep,
);
router.get('', AcademicDepController.getAllAcademicDep);
router.get(
  '/:DepId',
  validateRequest(academicDepValidationSchema),
  AcademicDepController.getSingleAcademicDep,
);
router.patch(
  '/:DepId',
  validateRequest(updateAcademicDepValidationSchema),
  AcademicDepController.updateAcademicDep,
);

export const AcademicDepRoutes = router;
