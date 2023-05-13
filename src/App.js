import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Blog from "./components/Blog";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
<div className="App">
<Navbar />
          <Hero />
          <Services title="Services" />
          {/* <Blog title="Blog Topics" /> */}
          <ContactForm title="Ask a Question or Get a Quote" />
        <Footer />
</div>
  );
};


export default App;
