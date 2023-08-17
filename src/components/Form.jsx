import { useState } from "react"

const Form = () => {
  const [step, setStep] = useState(1)
  
  return (
    <div className="bg-[white] w-[60vw] h-[80vh] p-[15px] rounded-xl flex flex-row">
        <img src="./bg-sidebar-desktop.svg" alt="side bar background picture" />
    </div>
  )
}

export default Form