import React, { useState, useRef } from 'react';
import { FormProvider } from './FormProvider';
import './CSS/FormStyles.css';

const ServiceRequest = () => {
  const [serviceLocation, setServiceLocation] = useState('');
  const [serviceRequest, setServiceRequest] = useState('');
  const [note, setNote] = useState('');

  const handleServiceLocationChange = (event) => {
    setServiceLocation(event.target.value);
  };

  const handleServiceRequestChange = (event) => {
    setServiceRequest(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <FormProvider>
      <div className="flex-col">
        <div className="split-container">
          <div className="flex-col">
            <label htmlFor="serviceLocation">Service Location</label>
            <select
              id="serviceLocation"
              name="serviceLocation"
              value={serviceLocation}
              onChange={handleServiceLocationChange}
            >
              <option value="On-site Service">On-site Service</option>
              <option value="Mail-in Service">Mail-in Service</option>
              <option value="Drop-off Service">Drop-off Service</option>
            </select>
          </div>
          <div className="flex-col">
            <label htmlFor="serviceRequest">Service Request</label>
            <select
              id="serviceRequest"
              name="serviceRequest"
              value={serviceRequest}
              onChange={handleServiceRequestChange}
            >
              <option value="Vehicle Diagnostics">Vehicle Diagnostics</option>
              <option value="Part Installations">Part Installations</option>
              <option value="Car Programming">Car Programming</option>
              <option value="Key Programming">Key Programming</option>
            </select>
          </div>
        </div>

        <div className="flex-col">
          {serviceLocation === 'On-site Service' && (
            <label htmlFor="note">Note</label>
          )}
          {serviceLocation === 'Mail-in Service' && (
            <label htmlFor="note">Once you receive your order confirmation, print it using a trackable courier service to: Toprin General Automotive 9846 Placid Bay San Antonio, TX 78245</label>
          )}
          {serviceLocation === 'Drop-off Service' && (
            <label htmlFor="note">Please call 210-981-0459 to schedule a drop-off appointment.</label>
          )}
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={handleNoteChange}
            rows="4"
            cols="50"
          ></textarea>
        </div>
      </div>
    </FormProvider>
  );
};

export default ServiceRequest;
