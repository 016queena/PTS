// Import the Parent model
import Parent from "../models/parent.model.js";

// Create a new parent account
export const createParent = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newParent = new Parent({ firstName, lastName, email, password });
    await newParent.save();
    res.status(201).json(newParent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Retrieve a list of all parent accounts
export const getAllParents = async (req, res) => {
  try {
    const allParents = await Parent.find();
    res.status(200).json(allParents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Retrieve a specific parent account by ID
export const getParentById = async (req, res) => {
  try {
    const { parentId } = req.params;
    const parent = await Parent.findById(parentId);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(parent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a specific parent account by ID
export const updateParentById = async (req, res) => {
  try {
    const { parentId } = req.params;
    const { firstName, lastName, email } = req.body;
    const updatedParent = await Parent.findByIdAndUpdate(
      parentId,
      { firstName, lastName, email },
      { new: true }
    );
    if (!updatedParent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(updatedParent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a specific parent account by ID
export const deleteParentById = async (req, res) => {
  try {
    const { parentId } = req.params;
    await Parent.findByIdAndDelete(parentId);
    res.status(200).json({ message: "Parent deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
