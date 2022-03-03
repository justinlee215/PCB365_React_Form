
import { useState } from 'react'
import './App.css';
import FormInput from './components/FormInput';


function App() {

  const [values, setValues ] = useState({
    shipperName: "",
    shipperContact: "",
    shipperPhone: "",
    shipperAddress: ""
  })

  console.log(values)
  const inputs = [
    {
      id: 1,
      name: "shipperName",
      type: "text",
      placeholder: "Shipper Name",
      errormessage:
        "Shipper Name is required",
      label: "Shipper Name",
      required: true,
    },
    {
      id: 2,
      name: "shipperContact",
      type: "text",
      placeholder: "Shipper Contact",
      errormessage: "Shipper Contact is required",
      label: "Shipper Contact",
      required: true,
    },
    {
      id: 3,
      name: "shipperPhone",
      type: "text",
      placeholder: "Shipper Phone",
      errormessage:
        "Shipper Phone is required",
      label: "Shipper Phone",
      required: true,
    },
    {
      id: 4,
      name: "shipperAddress",
      type: "text",
      placeholder: "Shipper Address",
      errormessage: "Shipper Address is required",
      label: "Shipper Address",
      required: false,
    },
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  const isValid = () => {
    return inputs.filter(input => input.required).some(input => !values[input.name])
     
  }
  console.log("isValid: ", isValid())
  return (
    <div className="app">
      <h1></h1>
        <form onSubmit={handleSubmit}>
          {
            inputs.map(input => (
              <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
            ))
          }
          <button disabled={isValid()} className={ isValid() ? "isValid": "isNotValid"}>Submit</button>
        </form>
    </div>
  );
}

export default App;
