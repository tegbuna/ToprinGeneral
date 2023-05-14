<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { FormProvider } from './FormProvider';
import './CSS/FormStyles.css';
import CreateAccount from './CreateAccount';

const ContactInformation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const setStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
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
    // Also add the contact information to the service order form.
    serviceOrderForm.elements.name.value = name;
    serviceOrderForm.elements.phone.value = phone;
    serviceOrderForm.elements.email.value = email;
    serviceOrderForm.elements.address.value = address;
    serviceOrderForm.elements.city.value = city;
    serviceOrderForm.elements.state.value = state;
    serviceOrderForm.elements.zipCode.value = zipCode;
    serviceOrderForm.elements.country.value = country;
  };

  return (
    <FormProvider>
      <div className="flex-col">
        <div className="split-container">
          <div className="flex-col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        <div className="flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex-col">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            value={address}
            onChange={handleAddressChange}
          />
            </div>

<div className="flex-col">
  <label htmlFor="city">City</label>
  <input
    id="city"
    name="city"
    value={city}
    onChange={handleCityChange}
  />
</div>

<div className="flex-col">
  <label htmlFor="state">State</label>
  <input
    id="state"
    name="state"
    value={state}
    onChange={setStateChange}
  />
</div>

<div className="flex-col">
  <label htmlFor="zipCode">Zip Code</label>
  <input
    id="zipCode"
    name="zipCode"
    value={zipCode}
    onChange={handleZipCodeChange}
  />
</div>

<div className="flex-col">
  <label htmlFor="country">Country</label>
  <input
    id="country"
    name="country"
    value={country}
    onChange={handleCountryChange}
  />
</div>

<div className="flex-col">
  <button type="submit" onClick={handleSubmit}>Create Account</button>
</div>
  </FormProvider>
);
};

export default ContactInformation;

=======
import React from 'react';
import './CSS/ContactForm.css';



const ContactInformation = () => {
  return (
    <div>ContactInformation</div>
  )
}

export default ContactInformation
>>>>>>> d5eaed2ea19b8ecc36dc9d8c30b05061a01df38d
