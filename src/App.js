import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm"
// import ServiceRequestForm from './components/ServiceRequestForm';
// import OrderServiceForm from './components/OrderServiceForm';
// import OrderService from './components/OrderService';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  const isResponsive = true;
  return (
    <div className="App">
      {isResponsive ? (
        <div className="App--responsive">
          <Navbar />
          <Hero />
          <Services title="Services" />
          <Blog title="Blog Topics" />
          <ContactForm title="Ask a Question or Get a Quote" />
          {/* <ServiceRequestForm title="Ask a Question or Get a Quote" /> */}
          {/* <OrderServiceForm /> */}
          {/* <OrderService /> */}
          <Footer />
        </div>
      ) : (
        <div className="App--non-responsive">
          <Navbar />
          <Hero />
          <Services title="Services" />
          <Blog title="Blog Topics" />
          <ContactForm title="Ask a Question or Get a Quote" />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;