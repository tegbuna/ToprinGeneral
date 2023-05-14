import React from 'react'
<<<<<<< HEAD
import './CSS/FormStyles.css';
=======
import './CSS/ContactForm.css';

>>>>>>> d5eaed2ea19b8ecc36dc9d8c30b05061a01df38d

const OptIn = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
<<<<<<< HEAD
                Receive our newsletter
            </label>
            <ul className="flex-col">
                <li>We will never spam you.</li>
                <li>Receive information on the latest cutting edge technologies in auto services. </li>
                <li>Be among the first to know about new services, and discounts.</li>
=======
                Receive our e-newsletter.
            </label>
            <ul className="flex-col">
                <li>We will never spam you.</li>
                <li>You will receive periodic emails about new blog article, new products and services and sales and discounts./li>
>>>>>>> d5eaed2ea19b8ecc36dc9d8c30b05061a01df38d
            </ul>
        </>
    )

    return content
<<<<<<< HEAD
}
=======
  )
}

>>>>>>> d5eaed2ea19b8ecc36dc9d8c30b05061a01df38d
export default OptIn