import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/ContactForm.css";

const ContactForm = () => {
  const [selectedServiceLocation, setSelectedServiceLocation] = useState("");
  const [serviceRequested, setServiceRequested] = useState("");
  const [partDetails, setPartDetails] = useState({ partName: "", partNumber: "" });
  const [vehicleInfo, setVehicleInfo] = useState({ year: "", make: "", model: "", vin: "" });
  const [paymentInfo, setPaymentInfo] = useState({ paymentMethod: "", billingAddress: "", cardNumber: "" });
  const [additionalComments, setAdditionalComments] = useState("");

  const [showOnLocationService, setShowOnLocationService] = useState(false);
  const [showDropOffService, setShowDropOffService] = useState(false);
  const [showMailInService, setShowMailInService] = useState(false);
  const [showPartInstallations, setShowPartInstallations] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data
    const formData = {
      selectedServiceLocation,
      serviceRequested,
      partDetails,
      vehicleInfo,
      paymentInfo,
      additionalComments,
    };

    // Submit the form data to EmailJS
    const form = document.getElementById("contactForm");
    emailjs
      .sendForm("service_n440u6s", "template_7ti6sy1", form, "6NJJiVvrP8uC0XQhK")
      .then((result) => {
        // Send the auto-reply email
        const userEmail = document.getElementById("user_email").value;
        emailjs.send(
          "service_ynwft5a",
          "template_7ti6sy1",
          { to_email: userEmail },
          "6NJJiVvrP8uC0XQhK"
        );
        alert(
          "Your message has been sent. You will receive a response within the next 24 hours. Thanks for connecting."
        );
      })
      .catch((error) => {
        alert("Looks like something went wrong. Let's try that again.");
      });
  };

  return (
    <form className="contact" id="contactForm" onSubmit={handleSubmit}>
      <h1 className="form-heading" id="form-heading">
        Service Request
      </h1>

      {/* Contact Information */}
      <section className="sections">
        <h2 className="section-heading">Contact Information</h2>
        <label>Your Name:</label>
        <input type="text" name="userName" placeholder="Your name" />
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" placeholder="Your phone number" />
        <label>Email Address:</label>
        <input type="email" id="user_email" name="userEmail" placeholder="Your email address" />
        <label className="physical-address">Physical Address:</label>
        <div className="address-block">
          <input className="address-line1" type="text" name="addressLine1" placeholder="Address" />
          <input className="address-line" type="text" name="addressLine2" placeholder="Apartment /" />
          <div className="address-city-row">
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="state" placeholder="State" />
            <input type="text" name="zipcode" placeholder="Zipcode" />
          </div>
        </div>
      </section>

      {/* Reason for Request */}
      <section className="sections">
        <h2 className="section-heading">Reason for Request</h2>
        <label>When was the issue first noticed?</label>
        <input type="date" name="issueDate" />
        <label>Any previous repair attempts? If yes, were they successful?</label>
        <textarea name="repairAttempts"></textarea>
        <label>Describe the current issue (500 characters or less):</label>
        <textarea name="currentIssue" maxLength="500"></textarea>
      </section>

      {/* Service Location */}
      <section className="sections">
        <h2 className="section-heading">Service Location</h2>
        <label>Select Service Location:</label>
        <div className="radio-group">
          <input
            type="radio"
            id="onLocation"
            name="serviceLocation"
            value="onLocation"
            checked={selectedServiceLocation === "onLocation"}
            onChange={() => {
              setSelectedServiceLocation("onLocation");
              setShowOnLocationService(true);
              setShowDropOffService(false);
              setShowMailInService(false);
              setShowPartInstallations(false);
            }}
          />
          <label htmlFor="onLocation">On-location service</label>

          <input
            type="radio"
            id="dropOff"
            name="serviceLocation"
            value="dropOff"
            checked={selectedServiceLocation === "dropOff"}
            onChange={() => {
              setSelectedServiceLocation("dropOff");
              setShowOnLocationService(false);
              setShowDropOffService(true);
              setShowMailInService(false);
              setShowPartInstallations(false);
            }}
          />
          <label htmlFor="dropOff">Drop-off service</label>

          <input
            type="radio"
            id="mailIn"
            name="serviceLocation"
            value="mailIn"
            checked={selectedServiceLocation === "mailIn"}
            onChange={() => {
              setSelectedServiceLocation("mailIn");
              setShowOnLocationService(false);
              setShowDropOffService(false);
              setShowMailInService(true);
              setShowPartInstallations(false);
            }}
          />
          <label htmlFor="mailIn">Mail-in service</label>
        </div>
      </section>

      {/* sections related to Service Location */}
      {selectedServiceLocation === "onLocation" && showOnLocationService && (
        <section className="sections">
          <h2 className="section-heading">On-location Service</h2>
          <label>Contact Name:</label>
          <input type="text" name="contactName" placeholder="Contact name" />
          <label>Contact Phone Number:</label>
          <input type="tel" name="contactPhoneNumber" placeholder="Contact phone number" />
          <label>Service Address:</label>
          <input type="text" name="serviceAddress" placeholder="Service address" />
        </section>
      )}
      {selectedServiceLocation === "dropOff" && showDropOffService && (
        <section className="sections">
          <h2 className="section-heading">Drop-off Service</h2>
          <label>Drop-off Appointment:</label>
          {/* Date and time picker for drop-off appointment */}
          <div>
            <label>Toprin Auto</label>
            <label>9846 Placid Bay</label>
            <label>San Antonio, TX 78245</label>
            <label>(210) 981-0459</label>
          </div>
        </section>
      )}
      {selectedServiceLocation === "mailIn" && showMailInService && (
        <section className="sections">
          <h2 className="section-heading">Mail-in Service</h2>
          <p>
            Print the screen that pops up after form submission and include it in your package when you mail the part(s) to
            the address below:
          </p>
          <div>
            <label>Toprin Auto</label>
            <label>9846 Placid Bay</label>
            <label>San Antonio, TX 78245</label>
          </div>
        </section>
      )}

      {/* Service Requested */}
      <section className="sections">
        <h2 className="section-heading">Service Requested</h2>
        <label>Select Service Requested:</label>
        <select value={serviceRequested} onChange={(e) => setServiceRequested(e.target.value)} name="serviceRequested">
          <option value="">Select Service</option>
          <option value="vehicleDiagnostics">Vehicle Diagnostics</option>
          <option value="partInstallations">Part Installations</option>
          <option value="carProgramming">Car Programming</option>
          <option value="keyProgramming">Key Programming</option>
        </select>

        {serviceRequested === "partInstallations" && showPartInstallations && (
          <div>
            <label>Part Name:</label>
            <input
              type="text"
              name="partName"
              value={partDetails.partName}
              onChange={(e) => setPartDetails({ ...partDetails, partName: e.target.value })}
            />
            <label>Part Number:</label>
            <input
              type="text"
              name="partNumber"
              value={partDetails.partNumber}
              onChange={(e) => setPartDetails({ ...partDetails, partNumber: e.target.value })}
            />
          </div>
        )}
      </section>

      {/* Vehicle Information */}
      <section className="sections">
        <h2 className="section-heading">Vehicle Information</h2>
        <label>Year:</label>
        <input
          type="number"
          name="vehicleYear"
          value={vehicleInfo.year}
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })}
        />
        <label>Make:</label>
        <input
          type="text"
          name="vehicleMake"
          value={vehicleInfo.make}
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })}
        />
        <label>Model:</label>
        <input
          type="text"
          name="vehicleModel"
          value={vehicleInfo.model}
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })}
        />
        <label>VIN (Optional):</label>
        <input
          type="text"
          name="vehicleVin"
          value={vehicleInfo.vin}
          onChange={(e) => setVehicleInfo({ ...vehicleInfo, vin: e.target.value })}
        />
      </section>

      {/* Payment Information */}
      <section className="sections">
        <h2 className="section-heading">Payment Information</h2>
        <label>Payment Method:</label>
        <select
          value={paymentInfo.paymentMethod}
          onChange={(e) => setPaymentInfo({ ...paymentInfo, paymentMethod: e.target.value })}
          name="paymentMethod"
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        {paymentInfo.paymentMethod === "creditCard" && (
          <div>
            <label>Billing Address:</label>
            <input
              type="text"
              name="billingAddress"
              value={paymentInfo.billingAddress}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, billingAddress: e.target.value })}
            />
            <label>Credit Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
            />
          </div>
        )}

        {/* PayPal button if PayPal is selected */}
        {paymentInfo.paymentMethod === "paypal" && (
          <button type="button" className="paypal-button">
            Pay with PayPal
          </button>
        )}
      </section>

      {/* Questions/ Comments */}
      <section className="sections">
        <h2 className="section-heading">Questions/ Comments</h2>
        <textarea
          name="additionalComments"
          value={additionalComments}
          onChange={(e) => setAdditionalComments(e.target.value)}
        />
      </section>

      {/* Submit Button */}
      <button type="submit" id="cta-button" className="button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
