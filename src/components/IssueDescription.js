import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import './CSS/ContactForm.css';


const IssueDescription = () => {
  const [issueDescription, setIssueDescription] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setIssueDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      issueDescription,
    };
    const { data } = useFormContext();
    data.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueDescription">Issue Description</label>
      <textarea
        id="issueDescription"
        cols="30"
        rows="10"
        value={issueDescription}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IssueDescription