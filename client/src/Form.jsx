import React, { useState } from "react"
import axios from 'axios'

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: ""
    })
    const [thankYou, setThankYou] = useState()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        axios.post('https://sheet.best/api/sheets/9300a094-f577-43bc-9e27-1486083c8c40', formData)
        .then(res => {
            console.log(res)
        })
        setFormData({
            firstname: "",
            lastname: "",
            email: ""
        })
        setThankYou("Thank you for submitting your information!")
        setTimeout(() => {
            setThankYou()
          }, 2000);
    }

    return (
        <>
            <h1>
                Be The First To Receive New Updates
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" autoComplete="off" value={formData.firstname} name="firstname" onChange={handleChange} required/>
                <input type="text" placeholder="Last Name" autoComplete="off" value={formData.lastname} name="lastname" onChange={handleChange} required/>
                <input type="email" placeholder="Email" autoComplete="off" value={formData.email} name="email" onChange={handleChange} required/>
                <br />
                <button type="submit" className="btn-get-started">Submit</button>
            </form>
            <p className="form-thanks">
                {thankYou}
            </p>
        </>
    )
}

export default Form