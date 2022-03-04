import { useState } from 'react'
import Buttonsnavigation from '../../../buttonsNavigation/ButtonsNavigation'
import FormInput from '../../../formInput/FormInput'

function Shipper({ inputs }) {

  const [values, setValues ] = useState({
    shipperName: "",
    shipperContact: "",
    shipperPhone: "",
    shipperAddress: "",
  })

  const [ valid, setValid ] = useState(true)

  console.log(values)

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const isValid = () => {
    inputs.filter(input => input.required).some(input => !values[input.name]) ? setValid(!valid) : setValid(!valid)
  }

  console.log("isValid: ", valid)

  return (
    <div className="Shipper">
      <h2>Shipper</h2>
            {inputs.map(input => (
              <FormInput  key={input.name} {...input} value={values[input.name]} onChange={onChange}/>
            ))
          }
          <Buttonsnavigation inputs={inputs} values={values}/>
    </div>
  );
}

export default Shipper;
