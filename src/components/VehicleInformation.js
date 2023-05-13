import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import './CSS/ContactForm.css';


const VehicleInformation = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    set[name](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      year,
      make,
      model,
      vin,
    };
    const { data } = useFormContext();
    data.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="year">Year</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={handleChange}
      ></input>
      <label htmlFor="make">Make</label>
      <input
        type="text"
        id="make"
        value={make}
        onChange={handleChange}
      ></input>
      <label htmlFor="model">Model</label>
      <input
        type="text"
        id="model"
        value={model}
        onChange={handleChange}
      ></input>
      <label htmlFor="vin">VIN</label>
      <input
        type="text"
        id="vin"
        value={vin}
        onChange={handleChange}
      ></input>
      <p>This information is essential to ensure we have the correct parts and tools to perform the service requested.</p>
      <div>
        <input type="checkbox" id="partsServicingRequest" name="partsServicingRequest" value="true" onChange={handleChange} />
        <label htmlFor="partsServicingRequest">Parts Servicing Request</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export default VehicleInformation