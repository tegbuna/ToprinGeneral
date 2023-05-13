import React from 'react';
import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import './CSS/ContactForm.css';

import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

const ServiceRequest = () => {
  const [serviceLocation, setServiceLocation] = useState("");
  const [serviceRequest, setServiceRequest] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setServiceLocation(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      serviceLocation,
      serviceRequest,
    };
    const { data } = useFormContext();
    data.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="serviceLocation">Service Location</label>
      <input
        type="radio"
        id="onSite"
        name="serviceLocation"
        value="On-site"
        checked={serviceLocation === "On-site"}
        onChange={handleChange}
      />
      <label htmlFor="onSite">On-site</label>
      <input
        type="radio"
        id="mailIn"
        name="serviceLocation"
        value="Mail-in"
        checked={serviceLocation === "Mail-in"}
        onChange={handleChange}
      />
      <label htmlFor="mailIn">Mail-in</label>
      <input
        type="radio"
        id="dropOff"
        name="serviceLocation"
        value="Drop-off"
        checked={serviceLocation === "Drop-off"}
        onChange={handleChange}
      />
      <label htmlFor="dropOff">Drop-off</label>
      <div id="onSiteInfo" style={serviceLocation === "On-site" && "display: block"}>
        <p>Please click next to provide your contact information.</p>
        <p>Once you have completed the request form, please text your name and order confirmation number along with the code: "OSR23" to 210-981-0459 in order to schedule a time and location for a technician to come out.</p>
      </div>
      <div id="mailInInfo" style={serviceLocation === "Mail-in" && "display: block"}>
        <p>If you are mailing items in, you must use a courier who will provide a tracking number for your item(s).</p>
        <p>Mail items to:</p>
        <p>[Name of part you're sending] c/o: Prince 9849 Placid Bay San Antonio, TX 78245</p>
      </div>
      <div id="dropOffInfo" style={serviceLocation === "Drop-off" && "display: block"}>
        <p>Please complete the request form and text your name and order confirmation number along with the code: "DOS23" to 210-981-0459 in order to schedule a drop-off time and location.</p>
      </div>
      <label htmlFor="serviceRequest">Service Request</label>
      <select
        id="serviceRequest"
        name="serviceRequest"
        value={serviceRequest}
        onChange={handleChange}
      >
        <option value="">Select a service</option>
        <option value="Vehicle Diagnostics">Vehicle Diagnostics</option>
        <option value="Part Installations">Part Installations</option>
        <option value="Car Programming">Car Programming</option>
        <option value="Key Programming">Key Programming</option>
      </select>
      <div id="note" style={serviceRequest !== "" && "display: block"}>
        <p>Please click next to tell us about the issue(s) you are experiencing.</p>
      </div>
      <div id="note" style={serviceRequest === "Part Installations" && "display: block"}>
        <p>Please click next to enter information about the part you would like installed. </p>
      </div>
      <div id="note" style={serviceRequest === "Car Programming" && "display: block"}>
        < p > Please click next to enter information about the vehicle you would like programmed. </p>
        </div>
  <div id="note" style={serviceRequest === "Key Programming" && "display: block"}>
    <p>Please click next to enter information about your vehicle – and the next button should route them to the VehicleInformation.js form.</p>
  </div>
  <div id="note" style={serviceRequest === "Airbag Module Reset" && "display: block"}>
    <p>Continue completing the form to place your request for mail in service. Once you receive your order confirmation you will need to mail a copy of it along with the part to be serviced to the address provided.</p>
  </div>
  <button type="submit">Submit</button>
    </form>
  );
};



export default ServiceLocation