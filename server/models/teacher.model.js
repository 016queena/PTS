import mongoose from "mongoose";
const teacherSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    cnic: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique:true},    
    password: {type: String, required: true},
    gender: {type: String, required: true},
    address: { type: String }, 
    phoneNumber: { type: String, uniqu:true }, 
    qualification: { type: String, required: true}, 
    department: { type: String, required: true }, 
    coursesTaught: { type: String }, 
    joiningDate: { type: Date, required: true },
    experience: { type: Number, required: true},
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;