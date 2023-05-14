import React, { useState, useRef } from 'react';
import { FormProvider } from './FormProvider';
import './CSS/FormStyles.css';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the passwords match.
    if (password !== confirmPassword) {
      alert('The passwords do not match.');
      return;
    }

    // Create a new user account.
    const user = {
      username,
      password,
    };

    // TODO: Firebase code here.

    // Redirect the user to the home page.
    //window.location.href = '/';

    // Instead of redirecting the user, let's update the service order form with the user's information.
    const serviceOrderForm = document.getElementById('serviceOrderForm');
    serviceOrderForm.elements.username.value = username;
    serviceOrderForm.elements.password.value = password;
  };

  return (
    <FormProvider>
      <div className="flex-col">
        <div className="split-container">
          <div className="flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>

        <div className="flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            type="password"
          />
        </div>

        <div className="flex-col">
          <button type="submit" onClick={handleSubmit}>Create Account</button>
        </div>
      </div>
    </FormProvider>
  );
};

export default CreateAccount;
