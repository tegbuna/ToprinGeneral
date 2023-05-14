import React, { useState } from "react";
import { FormContext } from "../context/FormContext";
import { useFormContext } from "react-hook-form";
import "./CSS/FormStyles.css";


const VehicleInformation = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [partsServicingRequest, setPartsServicingRequest] = useState(false);

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
      partsServicingRequest,
    };
    const { handleSubmit } = useFormContext();
    handleSubmit(formData);
  };
  

  return (
    <FormContext.Consumer>
      {({ data }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={handleChange}
          />
          <label htmlFor="make">Make</label>
          <input
            type="text"
            id="make"
            value={make}
            onChange={handleChange}
          />
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={handleChange}
          />
          <label htmlFor="vin">VIN</label>
          <input
            type="text"
            id="vin"
            value={vin}
            onChange={handleChange}
          />
          <p>
            This information is essential to ensure we have the correct parts and
            tools to perform the service requested.
          </p>
          <div>
            <input
              type="checkbox"
              id="partsServicingRequest"
              name="partsServicingRequest"
              value="true"
              onChange={handleChange}
            />
            <label htmlFor="partsServicingRequest">
              Parts Servicing Request
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </FormContext.Consumer>
  );
};

export default VehicleInformation;
