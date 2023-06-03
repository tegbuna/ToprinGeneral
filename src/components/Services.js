import React, { useState } from 'react';
import './CSS/Services.css';
import OrderService from './OrderService';


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
              <button id="cta-button" onClick={openForm}>
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
              <button id="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <img src="https://i.imgur.com/d5xx0wQ.png" alt="Instrument Cluster Repair" />
            </div>
            <div id="card-right">
              <p id="heading-title">Instrument Cluster Repair</p>
              <p className="paragraph" id="card-body">
                Is your instrument cluster malfunctioning? Don't drive blind - let us repair it for you. We use only the best parts
                and tools to ensure your dashboard is back in tip-top condition in no time.
              </p>
              <button id="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          <div className="service-card" id="row-reverse">
            <img src="https://i.imgur.com/5mZyjBn.jpg" alt="Key Fob Replacement" />
            <div id="card-right">
              <p id="heading-title">Key Fob Replacement</p>
              <p className="paragraph" id="card-body">
                Lost your key fob? Need a duplicate? Our skilled technicians can replace your key fob or program another one quickly
                and easily, ensuring you're back on the road in no time.
              </p>
              <button id="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          <div className="service-card">
            <img src="https://i.imgur.com/tN8bXxl.png" alt="Vehicle Diagnostics" />
            <div id="card-right">
              <p id="heading-title">Vehicle Diagnostics</p>
              <p className="paragraph" id="card-body">
                Having an issue, but don't quite know what it is? We've got you covered. We use advanced diagnostic tools to quickly
                identify and repair any issue.
              </p>
              <button id="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>

          <div className="service-card">
            <img src="https://i.imgur.com/oMpt9KX.jpg" alt="Vehicle Diagnostics" />
            <div id="card-right">
              <p id="heading-title">Parts Installations</p>
              <p className="paragraph" id="card-body">
                You can bring your own part or let us order the right one for your vehicle. We offer speedy, quality parts
                installations so you can upgrade your vehicle ASAP.
              </p>
              <button id="cta-button" onClick={openForm}>
                Order Service
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && <OrderService closeForm={closeForm} />}
    </div>
  );
};

export default Services;
