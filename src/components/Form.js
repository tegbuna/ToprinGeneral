import React from 'react'
import FormInputs from './FormInputs'
import useFormContext from "../hooks/useFormContext"
import './CSS/ContactForm.css';


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
        submitHide
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
<div className="form-container">
<form  onSubmit={handleSubmit}>

<header className='title'>
    <h2>{title[page]}</h2>

    <div className="button-container">

        <buttonc className="submit-button" type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}> Prev</button>

        <button className="submit-button" type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next </button>

        <button className="submit-button" type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
    </div>
</header>


<FormInputs />

</form>
</div>
    )

    return content
}
export default Form