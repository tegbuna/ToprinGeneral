import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './CSS/Services.css';

const Services = ({ title }) => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="services">
      <h1 id="page-titles">{title}</h1>
      <div className="services-container">
        <div className="service-group">
          <div className="service-card">
            <img src="https://i.imgur.com/QTYNU79.jpg" alt="Airbag Module Reset" />
            <div id="card-right">
              <p id="heading-title">Airbag Module Reset</p>
              <p className="paragraph" id="card-body">
                Get your airbag module reset quickly and affordably. You can mail it in or skip the wait and drop it off for faster
                service. Either way, we will ensure it's back in working order in no time.
              </p>
              <button className="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          <div className="service-card" id="row-reverse">
            <img src="https://i.imgur.com/xyrCbMj.jpg" alt="Car Programming" />
            <div id="card-right">
              <p id="heading-title">Car Programming</p>
              <p className="paragraph" id="card-body">
                We offer reliable car programming services for all makes and models. Our state-of-the-art technology ensures your
                vehicle is programmed correctly the first time, every time.
              </p>
              <button className="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          {/* Rest of the service cards */}

        </div>
      </div>
      {showForm && <ContactForm title="Order Service" closeForm={closeForm} />}
    </div>
  );
};

export default Services;
