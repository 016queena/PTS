import Admin from '../models/admin.model.js';

export const createAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ username: "admin" });

    if (existingAdmin) {
      return res.status(409).json({ message: "Admin account already exists" });
    }

    const { username, email, password } = req.body;
    const newAdmin = new Admin({ username, email, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminProfileById = async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const adminProfile = await Admin.findById(adminId);

    if (!adminProfile) {
      return res.status(404).json({ message: 'Admin profile not found' });
    }

    res.status(200).json(adminProfile);
  } catch (error) {
    console.error('Error retrieving admin profile', error);
    res.status(500).json({ message: 'Server error' });
  }
};
