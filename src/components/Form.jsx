import { useState } from "react"
import Sidebar from "./Sidebar"

const Form = ({ isDesktop }) => {
  const [step, setStep] = useState(1)

  return (
    <div className={`${isDesktop ? "bg-[white] w-[60vw] h-[75vh] m-[0] py-[15px] px-[10px] rounded-xl flex flex-row": "w-screen h-screen"}`}>
        <Sidebar step={step} setStep={setStep} isDesktop={isDesktop} />
    </div>  
  )
}

export default Form