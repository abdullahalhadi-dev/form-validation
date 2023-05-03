import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Signup.css'

const Signup = () => {
    const formik = useFormik({
        initialValues : {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name Need at least 2 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Password Need at least 6 characters").required(),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            resetForm({values: ""})
        }
    })

const nameError = formik.touched.name && formik.errors.name && ( <span style={{color: "red"}}>{formik.errors.name}</span> );
const emailError = formik.touched.email && formik.errors.email && ( <span style={{color: "red"}}>{formik.errors.email}</span> );
const passwordError = formik.touched.password && formik.errors.password && ( <span style={{color: "red"}}>{formik.errors.password}</span> );

const form = <form className='form' onSubmit={formik.handleSubmit}>
<div className='style'>
    <label htmlFor="name">Name: </label>
    <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} required/>
    <br />
    {nameError}
</div>
<div className='style'>
    <label htmlFor="email">Email: </label>
    <input type="text" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} required/>
    <br />
    {emailError}
</div>
<div className='style'>
    <label htmlFor="name">Password: </label>
    <input type="text" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} required/>
    <br />
    {passwordError}
</div>
<button type='submit'>Signup</button>
</form>

  return (
    <div>
        <h2>User Signup</h2>
        {form}
    </div>
  )
}
export default Signup