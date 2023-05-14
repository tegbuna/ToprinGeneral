import React from 'react'
import './CSS/FormStyles.css';

const OptIn = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
                Receive our newsletter
            </label>
            <ul className="flex-col">
                <li>We will never spam you.</li>
                <li>Receive information on the latest cutting edge technologies in auto services. </li>
                <li>Be among the first to know about new services, and discounts.</li>
            </ul>
        </>
    )

    return content
}
export default OptIn