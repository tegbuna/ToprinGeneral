import React, { useState } from 'react';
import { FormProvider } from './FormProvider';
import './CSS/FormStyles.css';

const ServiceLocation = () => {
  const [serviceLocation, setServiceLocation] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleServiceLocationChange = (event) => {
    setServiceLocation(event.target.value);
  };

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
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
        </div>

        {serviceLocation === 'On-site Service' && (
          <div className="flex-col">
            <label htmlFor="contactName">Contact Name</label>
            <input
              id="contactName"
              name="contactName"
              value={contactName}
              onChange={handleContactNameChange}
            />
          </div>

          <div className="flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}/>
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
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={handleNoteChange}
              rows="4"
              cols="50"
            ></textarea>
            <p>
              Please text your name and order confirmation number along with the code: "OSR-23 to " 210-981-0459 to schedule an on-site appointment.
            </p

          </div>
        )}

        {serviceLocation === 'Mail-in Service' && (
          <div className="flex-col">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={handleNoteChange}
              rows="4"
              cols="50"
            ></textarea>
                         <p>
                Once you receive your order confirmation, print it and mail it along with the part to be repaired using a trackable courier service to: <br />
                Toprin General Automotive c/o: Prince 9846 Placid Bay San Antonio, TX 78245
              </p>
            </div>

        {serviceLocation === 'Drop-off Service' && (
          <div className="flex-col">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={handleNoteChange}
              rows="4"
              cols="50"
            ></textarea>
            <p>
              Please text your name and order confirmation number along with the code: "DOR-23 to " 210-981-0459 to schedule a drop-off appointment.
            </p>
          </div>

          <div className="flex-col">
            <label htmlFor="contactName">Contact Name</label>
            <input
              id="contactName"
              name="contactName"
              value={contactName}
              onChange={handleContactNameChange}
            />
          </div>

          <div className="flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}/>
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
        )}

      </div>
    </FormProvider>

  );
};

export default ServiceLocation;
