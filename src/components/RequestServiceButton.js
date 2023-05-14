import React from 'react';
import { FormProvider } from '../context/FormContext';
import  Form from "../components/Form";


const RequestServiceButton = () => {
    return (
<div className="RequestServicesButton">
<div className="center-button">
        <a className="center" id="cta-button" href="/" alt="Button to Order Service">Request Service</a>
      </div> 
              <FormProvider>
              <Form />
            </FormProvider>
</div>

      )
}

export default RequestServiceButton