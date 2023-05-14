import React from 'react';
import { FormContext } from '../context/FormContext';
import FormInputs from './FormInputs';
import useFormContext from '../hooks/useFormContext';
import './CSS/FormStyles.css';

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const content = (
    <FormContext.Consumer>
      {({ data }) => (
        <form className="form flex-col" onSubmit={handleSubmit}>
          <header className="form-header">
            <h2>{title[page]}</h2>
            <div className="button-container">
              <button
                className={`button ${prevHide}`}
                disabled={disablePrev}
                onClick={handlePrev}
                type="button"
              >
                Prev
              </button>
              <button
                className={`button ${nextHide}`}
                disabled={disableNext}
                onClick={handleNext}
                type="button"
              >
                Next
              </button>
              <button
                className={`button ${submitHide}`}
                disabled={!canSubmit}
                type="submit"
              >
                Submit
              </button>
            </div>
          </header>
          <FormInputs />
        </form>
      )}
    </FormContext.Consumer>
  );

  return content;
};

export default Form;
