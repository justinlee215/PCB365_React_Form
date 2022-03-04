
import { useState } from 'react'
import FormInput from '../../../formInput/FormInput'

function Exporter() {

  const [values, setValues ] = useState({
    exporterName: "",
    exporterContact: "",
    exporterPhone: "",
    exporterAddress: ""
  })

  console.log(values)

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  
  console.log("isValid: ", isValid())
  return (
    <div className="exporter">
      <h2>exporter</h2>
            {inputs.map(input => (
              <FormInput  key={input.name} {...input} value={values[input.name]} onChange={onChange}/>
            ))
          }
          <button disabled={isValid()}>Submit</button>
    </div>
  );
}

export default Exporter;
