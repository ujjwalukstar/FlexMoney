const express = require("express");
const Enrollment = require("../models/Enrollment");
const router = express.Router();

// POST: Enroll a new student
router.post("/", async (req, res) => {
  try {
    const { name, age, batch } = req.body;
    
    // Validate age
    if (age < 18 || age > 65) {
      return res.status(400).json({ message: "❌ Age must be between 18 and 65." });
    }

    // Create new enrollment
    const newEnrollment = new Enrollment({ name, age, batch });
    await newEnrollment.save();
    res.status(201).json({ message: "✅ Enrollment successful!" });

  } catch (error) {
    res.status(500).json({ message: "❌ Server Error. Please try again later." });
  }
});

module.exports = router;
