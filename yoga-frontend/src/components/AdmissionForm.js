import React, { useState } from "react";
import axios from "axios";
import "./../styles/AdmissionForm.css";
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    batch: "6-7AM",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://flexmoney-xcv0.onrender.com/api/enroll", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Something went wrong.");
    }
  };

  return (
    <div className="container">
      <h2>Yoga Admission Form</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <label>Batch:</label>
        <select name="batch" value={formData.batch} onChange={handleChange}>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>

        <button type="submit">Enroll Now</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
