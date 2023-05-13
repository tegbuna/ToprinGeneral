
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/ContactForm.css';

const ContactForm = ({ title }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // get the user's email address from the form input
    const userEmail = e.target.user_email.value;

    emailjs.sendForm("service_n440u6s", "template_7ti6sy1", form.current, "6NJJiVvrP8uC0XQhK")
      .then((result) => {
        // send the auto-reply to the user's email address
        emailjs.send("service_ynwft5a", "template_7ti6sy1", { to_email: userEmail }, "6NJJiVvrP8uC0XQhK");
        alert("Your message has been sent. You will receive a response within the next 24 hours. Thanks for connecting.");
      }, (error) => {
        alert("Looks like something went wrong. Let's try that again.");
      });
    e.target.reset();
  };


  return (
    <div className="contact-form">
      <div className="connect-container">
        <div className="footer-hero">
          <div id="super-title">
            <div>
              Ready to get started?
            </div>
          </div>
          <div className="card-body" id="hero-subtitle">
            <p> We may offer a service you didn't see here. To make an inquiry or get a quote, complete this contact form and we'll let you know.
            </p>
            <br />
            <hr />
            <br />
            <p>For faster service text or call: (210) 981-0459</p>
          </div>
        </div>
        
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className='title'>{title}</h2>
            <br />
            <label className="para">Name</label>
            <input type="text" name="from_name" />

            <label className="para">Email</label>
            <input type="email" name="user_email" />

            <label className="para">Message</label>
            <textarea name="message" />

            <button className="submit-button" type="submit" value="Send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
