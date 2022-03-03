import React from 'react'
import './formInput.css'

export default function FormInput(props) {

    const { label, onChange, ...otherProps} = props
    
return (
    <div className="formInput">
        <label htmlFor="">{label}</label>
        <input {...otherProps} type="text" onChange={onChange} />
    </div>
  )
}
