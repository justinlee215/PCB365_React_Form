import { useState }  from 'react'
import Shipper from './Shipper/Shipper'
// import './canadaCustomsInvoice.css'
import ButtonsNavigation from '../../buttonsNavigation/ButtonsNavigation'

function CanadaCustomsInvoice() {

  const [step, setStep] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const inputs = [
    {
      name: "shipperName",
      type: "text",
      errormessage:
        "shipper Name is required",
      label: "shipper Name",
      required: true,
    },
    {
      name: "shipperContact",
      type: "text",
      errormessage: "shipper Contact is required",
      label: "shipper Contact",
      required: true,
    },
    {
      name: "shipperPhone",
      type: "text",
      errormessage:
        "shipper Phone is required",
      label: "shipper Phone",
      required: true,
    },
    {
      name: "shipperAddress",
      type: "text",
      errormessage: "shipper Address is required",
      label: "shipper Address",
      required: true,
    },
  ]

  const fieldGroups = [
    <Shipper step={step} inputs={inputs}/>
  ]

  return (
    <div className="CanadaCustomsInvoice">
      <h1>CanadaCustomsInvoice</h1>
        <form onSubmit={handleSubmit}>
          {fieldGroups[step]}
          <ButtonsNavigation step={step} setStep={setStep} fieldGroupsLength={fieldGroups.length} />
        </form>
    </div>
  );
}

export default CanadaCustomsInvoice;
