import { useState } from "react"
import Sidebar from "./Sidebar"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

const Form = ({ isDesktop }) => {
  const [step, setStep] = useState(1)
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  return (
    <div className={`${isDesktop ? "bg-[white] w-[70vw] h-[75vh] m-[0] py-[15px] px-[10px] rounded-2xl flex flex-row" : "w-screen h-screen"}`}>
      <Sidebar step={step} setStep={setStep} isDesktop={isDesktop} />
      {
        (() => {
          switch (step) {
            case 1:
              return <Step1 personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} setStep={setStep} />;
            case 2:
              return <Step2 setStep={setStep} />;
            case 3:
              return <Step3 />;
            case 4:
              return <Step4 />;
            default:
              return <Step1 />;
          }
        })()
      }
    </div>
  )
}

export default Form