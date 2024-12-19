import { Schema, model, connect } from 'mongoose';
import { Guardian, Student, Student, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    }
})

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    fatherContactNo: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    motherOccupation: {
        type: String,
        required: true
    },
    motherContactNo: {
        type: String,
        required: true
    }
})

const studentSchema = new Schema<Student>({
    id: {type: String},
    name: userNameSchema,
    gender: ['male', 'female'],
    dOB: {type:String, required: true},
    email: {type:String, required: true},
    contactNo: {type:String, required: true},
    emergencyNo: {type:String, required: true},
    bloodGroup: ['A+','A-','B+','B-','AB+','AB-','O+','O-'],
    guardian: guardianSchema,
    profileImg: {type: String},
    isActive: ['active', 'inActive']
})


export const StudentModel = model<Student>('Student', studentSchema);