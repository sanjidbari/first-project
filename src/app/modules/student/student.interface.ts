export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  dOB: string;
  email: string;
  contactNo: string;
  emergencyNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};
