
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
      name: "shipperName",
      type: "text",
      placeholder: "Shipper Name",
      errormessage:
        "Shipper Name is required",
      label: "Shipper Name",
      required: true,
    },
    {
      id: 4,
      name: "shipperContact",
      type: "text",
      placeholder: "Shipper Contact",
      errormessage: "Shipper Contact is required",
      label: "Shipper Contact",
      required: true,
    },
  ]

  const onChange = (e) => {
    setValues({...values, [values[e.target.name]]: values[e.target.value]})
  }

  return (
    <div className="App">
      <header className="App-header">
          <form action="">
            {
              inputs.map(input => (
                <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))
            }
            <button>Submit</button>
          </form>
      </header>
    </div>
  );
}

export default App;
