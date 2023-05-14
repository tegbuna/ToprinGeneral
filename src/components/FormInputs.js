import React from 'react';
import './CSS/FormStyles.css';
import ServiceRequest from "./ServiceRequest ";
import ServiceLocation from "./ServiceLocation ";
import IssueDescription from "./IssueDecription";
import VehicleInformation from "./VehicleInformation";
import Contact from "./Contact";
import Account from "./Account";
import Billing from "./Billing"
import OptIn from "./OptIn"
import Shipping from "./Shipping"
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <ServiceRequest />,
        1: <ServiceLocation />,
        2: <IssueDescription />,
        3: <VehicleInformation />,
        4: <Contact />,
        5: <Account />,
        6: <Billing />,
        7: <Shipping />,
        8: <OptIn />,
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs

