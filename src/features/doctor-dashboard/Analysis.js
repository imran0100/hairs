import React, { useState } from 'react'
import DoctorNavbar from './DoctorNavbar'
import Test1 from './analysis/Test1'
import './Analysis.css'
import Test2 from './analysis/Test2'
import Test3 from './analysis/Test3'
import Test4 from './analysis/Test4'
export default function Analysis() {
    const [step,setStep]=useState(1)
    const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
    let stepContent
    switch (step) {
        case 1:
            stepContent=<Test1 nextStep={nextStep}/>
            break;
            case 2:
                stepContent=<Test2 nextStep={nextStep} prevStep={prevStep}/>
                break;
                case 3:
                  stepContent=<Test3 nextStep={nextStep} prevStep={prevStep}/>
                  break; 
                  case 4:
                    stepContent=<Test4 nextStep={nextStep} prevStep={prevStep}/>
                    break;
            default:
                stepContent=null
    }
  return (
    <DoctorNavbar>{stepContent}</DoctorNavbar>
  )
}
