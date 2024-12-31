export type User = {
  id: string;
  password: string;
  defaultPassword: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'active' | 'blocked';
  isDeleted: boolean;
};
