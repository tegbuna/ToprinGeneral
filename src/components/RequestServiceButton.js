import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const RequestServiceButton = () => {
  const { canSubmit } = useContext(FormContext);

  return (
    <button type="submit" disabled={!canSubmit}>
      Submit
    </button>
  );
};

export default RequestServiceButton;
