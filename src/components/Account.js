import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
<<<<<<< HEAD
import './CSS/FormStyles.css';
=======
import './CSS/ContactForm.css';
>>>>>>> d5eaed2ea19b8ecc36dc9d8c30b05061a01df38d


const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };
    const { data } = useFormContext();
    data.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};