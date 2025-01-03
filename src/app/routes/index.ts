import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRoutes } from '../modules/student/student.route';
import { AcademicSemRoutes } from '../modules/academicSem/academicSem.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepRoutes } from '../modules/academicDep/academicDep.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-sem',
    route: AcademicSemRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-dep',
    route: AcademicDepRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
