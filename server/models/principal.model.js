import mongoose from "mongoose";
const principalSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    cnic: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique:true},    
    password: {type: String, required: true},
    gender: {type: String, required: true},
    address: { type: String }, 
    phoneNumber: { type: String, uniqu:true },
    joiningDate: { type: Date, required: true},
    experience: { type: Number, required: true},
});

const Principal = mongoose.model("Principal", principalSchema);
export default Principal;