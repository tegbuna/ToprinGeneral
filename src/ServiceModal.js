import React from 'react';
import Form from "./components/Form"
import { FormProvider } from './context/FormContext'


const ServiceModal = () => {
    return (
        <FormProvider>
          <Form />
        </FormProvider>
      )
}

export default ServiceModal