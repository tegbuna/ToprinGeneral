import React from 'react';
import './CSS/Services.css';

const Services = ({ title }) => {
  return (
    <div className="services">
              <h1 className="titles">{title}</h1>
      <div className="services-container">
        <div className="service-group">
          <div className="service-card">
            <img src="https://i.imgur.com/QTYNU79.jpg" alt="Airbag Module Reset" />
            <div id="card-right">
              <h2 id="sub-bold">Airbag Module Reset</h2>
              {/* <p className='card-body'>Get your airbag module reset quickly and affordably with Toprin General. Our expert technicians will ensure your safety system is back in working order in no time.</p> */}
              <div className="center-button">
             <a  className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
             </div>
            </div>
          </div>
          <div className="service-card" id="row-reverse">
            <img src="https://i.imgur.com/xyrCbMj.jpg" alt="Car Programming" />
            <div id="card-right">
              <h2 id="sub-bold">Car Programming</h2>
              {/* <p className="card-body">At Toprin General, we offer reliable car programming services for all makes and models. Our state-of-the-art technology ensures your vehicle is programmed correctly the first time, every time.</p> */}
              <div className="center-button">
             <a  className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
             </div>
            </div>
          </div>
          <div className="service-card">
            <img src="https://i.imgur.com/d5xx0wQ.png" alt="Instrument Cluster Repair" />
            <div id="card-right">
              <h2 id="sub-bold">Instrument Cluster Repair</h2>
              {/* <p className="card-body">Is your instrument cluster malfunctioning? Don't drive blind - let the experts at Toprin General repair it for you. We use only the best parts and tools to ensure your dashboard is back in top condition.</p> */}
              <div className="center-button">
             <a  className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
             </div>
            </div>
          </div>
          <div className="service-card" id="row-reverse">
            <img src="https://i.imgur.com/5mZyjBn.jpg" alt="Key Fob Replacement" />
            <div id="card-right">
              <h2 id="sub-bold">Key Fob Replacement</h2>
              {/* <p className="card-body">Lost your key fob? Toprin General has got you covered. Our skilled technicians can replace your key fob quickly and easily, ensuring you're back on the road in no time.</p> */}
              <div className="center-button">
             <a  className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
             </div>
            </div>
          </div>
          <div className="service-card">
            <img src="https://i.imgur.com/tN8bXxl.png" alt="Vehicle Diagnostics" />
            <div id="card-right">
              <h2 id="sub-bold">Vehicle Diagnostics</h2>
              {/* <p className="card-body">Toprin General's advanced diagnostic tools and experienced technicians can quickly identify and repair any issues with your vehicle.</p> */}
             <div className="center-button">
             <a  className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Services