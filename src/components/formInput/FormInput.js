import { useState } from 'react'
import './formInput.css'

export default function FormInput(props) {
  const [blured, setBlured] = useState(false)
  const { label, onChange, errormessage, ...otherProps} = props
    
  const handleBlur = (e) => {
    setBlured(true)
  }

  // console.log("focused: ", blured)
  return (
      <div className="formInput">
          <label htmlFor="">{label}</label>
          <input 
            {...otherProps} 
            onBlur={handleBlur} 
            onChange={onChange}
            // onFocus={() => 
            //   otherProps.
            // }
            focused={blured.toString()}
            />
          <span>{errormessage}</span>
      </div>
    )
}
