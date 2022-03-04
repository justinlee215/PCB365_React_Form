import { useState } from 'react'
import './buttonsNavigation.css'

const ButtonsNavigation = ({ step, setStep, fieldGroupsLength, inputs, values, }) => {

  const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  
  // const isValid = () => {
  //   return inputs.filter(input => input.required).some(input => !values[input.name]) 
  // }
  // console.log("isValid from ButtonsNavigation: ", isValid)
return (
    <section className="buttons">
      {
        step > 0 &&
      <button type="button" className="button" onClick={() => {setStep(step - 1)}}>
        <img src={leftArrow}/>
        BACK
      </button>
      }
      {
        step === fieldGroupsLength - 1 && 
        <button type="submit" className="button" >
          <img src={rightArrow}/>
          SUBMIT
        </button>
      }
      {
        step < fieldGroupsLength - 1 &&
        <button type="button" className="button"  onClick={() => {setStep(step + 1)}}>
          <img src={rightArrow}/>
          NEXT
        </button>
      }
    </section>
  )
}

export default ButtonsNavigation
