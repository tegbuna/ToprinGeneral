import "./CSS/FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./CSS/FormStyles.css";
import "./CSS/OrderService.css";


const OrderService = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // get the user's email address from the form input
    const userEmail = e.target.user_email.value;

    emailjs.sendForm(
      "service_n440u6s",
      "template_7ti6sy1",
      form.current,
      "6NJJiVvrP8uC0XQhK"
    ).then((result) => {
      // send the auto-reply to the user's email address
      emailjs.send(
        "service_ynwft5a",
        "template_7ti6sy1",
        { to_email: userEmail },
        "6NJJiVvrP8uC0XQhK"
      );
      alert("Your message has been sent. You will receive a response within the next 24 hours. Thanks for connecting.");
    }, (error) => {
      alert("Looks like something went wrong. Let's try that again.");
    });

    e.target.reset();
  };

  return (
    <div className="contact-form">
      <div className="connect-container">
        <div className="form-container">
          <h2 className="hero-title" id="form-container">Service Request</h2>
          <form ref={form} onSubmit={sendEmail}>

            <div className="form-section">  <h3 className="heading-title" id="form-title">Service Location</h3>
              <div className="form-group">
                <div className="input-fields-container">
                  <div className="input-fields-container" >

                    <div className="radio-section">
                      <div className="radio-group">
                        <label id="radio-label" htmlFor="dropOff">On-Location </label>
                        <input type="radio" id="onLocation" name="serviceLocation" value="onLocation" />
                      </div>
                      {/* <br /> */}
                      <div className="radio-group">
                        <label id="radio-label" htmlFor="dropOff">Drop-Off </label>
                        <input type="radio" id="dropOff" name="serviceLocation" value="dropOff" />
                      </div>
                      {/* <br /> */}
                      <div className="radio-group">
                        <label id="radio-label" htmlFor="mailIn">Mail-in </label>
                        <input type="radio" id="mailIn" name="serviceLocation" value="mailIn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="form-section">
              <h3 className="heading-title" id="form-title">Reason for Request</h3>
              <div className="form-group">
                <div className="input-fields-contaner">
                  <div className="input-fields">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" name="name" placeholder="First Name" />
                  </div>
                </div>


                <div className="input-fields">
                  <label htmlFor="name">Last Name</label>
                  <input className="input" type="text" id="name" name="name" placeholder="Last Name" />
                </div>

                <div className="input-fields">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="email" id="email" name="email" placeholder="Email" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h3 className="heading-title" id="form-title">Service Location</h3>
              <div className="form-group">
                <div className="input-fields-contaner">
                  <div className="input-fields">
                    <label htmlFor="name">First Name</label>
                    <input className="input" type="text" id="name" name="name" placeholder="First Name" />
                  </div>
                </div>


                <div className="input-fields">
                  <label htmlFor="name">Last Name</label>
                  <input className="input" type="text" id="name" name="name" placeholder="Last Name" />
                </div>

                <div className="input-fields">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="email" id="email" name="email" placeholder="Email" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h3 className="heading-title" id="form-title">Service Requested</h3>
              <div className="form-group">
                <div className="input-fields-contaner">
                  <div className="input-fields">
                    <label htmlFor="name">First Name</label>
                    <input className="input" type="text" id="name" name="name" placeholder="First Name" />
                  </div>
                </div>


                <div className="input-fields">
                  <label htmlFor="name">Last Name</label>
                  <input className="input" type="text" id="name" name="name" placeholder="Last Name" />
                </div>

                <div className="input-fields">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="email" id="email" name="email" placeholder="Email" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h3 className="heading-title" id="form-title">Payment Information</h3>
              <div className="form-group">
                <div className="input-fields-contaner">
                  <div className="input-fields">
                    <label htmlFor="name">First Name</label>
                    <input className="input" type="text" id="name" name="name" placeholder="First Name" />
                  </div>
                </div>


                <div className="input-fields">
                  <label htmlFor="name">Last Name</label>
                  <input className="input" type="text" id="name" name="name" placeholder="Last Name" />
                </div>

                <div className="input-fields">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="email" id="email" name="email" placeholder="Email" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

              </div>
            </div>

            <div className="form-section">
              <h3 className="heading-title" id="form-title">Questions/Comments</h3>
              <div className="form-group">
                <div className="input-fields-contaner">
                  <div className="input-fields">
                    <label htmlFor="name">First Name</label>
                    <input className="input" type="text" id="name" name="name" placeholder="First Name" />
                  </div>
                </div>


                <div className="input-fields">
                  <label htmlFor="name">Last Name</label>
                  <input className="input" type="text" id="name" name="name" placeholder="Last Name" />
                </div>

                <div className="input-fields">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="email" id="email" name="email" placeholder="Email" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

                <div className="input-fields">
                  <label htmlFor="phone">Phone</label>
                  <input className="input" type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>

              </div>

            </div>
            <div className="footer-hero">
              <div className="button-width-container">
                {/* <div id="cta-button" > */}
                  <button id="cta-button" type="submit" >Submit</button>
                {/* </div> */}
              </div>

              <p className="paragraph" id="instructions">
                If you are mailing items to be serviced, once you receive your order confirmation, print it using a trackable courier service to:
                <hr />
                <b></b>           <span className="address">
                  <p>Toprin General Automotive </p>
                  <p> 9846 Placid Bay</p>
                  <p>San Antonio, TX 78245</p>
                </span></p>
            </div>




          </form>
        </div>

      </div>
    </div>
  );
};

export default OrderService;


