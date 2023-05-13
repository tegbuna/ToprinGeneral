import React from 'react'
import './CSS/ContactForm.css';


const OptIn = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
                Receive our e-newsletter.
            </label>
            <ul className="flex-col">
                <li>We will never spam you.</li>
                <li>You will receive periodic emails about new blog article, new products and services and sales and discounts./li>
            </ul>
        </>
    )

    return content
  )
}

export default OptIn