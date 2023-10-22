import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    gender: {type: String, required: true},
    address: { type: String }, 
    phoneNumber: { type: String, required: true, unique: true }, 
    department: { type: String, required: true }, 
    program: { type: String, required: true }, 
    batch: { type: String, required: true }, 
});

const Student = mongoose.model("Student", studentSchema);
export default Student;