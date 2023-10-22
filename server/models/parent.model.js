const parentSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    address: {type: String},
    phoneNumber: { type: String, required: true, unique: true },
    relationshipToStudent: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    occupation: { type: String, required: true },
});

const Parent = mongoose.model("Parent", parentSchema);
