const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    headOfDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    programs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program',
        },
    ],
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
