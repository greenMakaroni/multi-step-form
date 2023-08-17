import { useState } from "react"
import Sidebar from "./Sidebar"

const Form = ({ isDesktop }) => {
  const [step, setStep] = useState(1)

  return (
    <div className={`${isDesktop ? "bg-[white] w-[60vw] h-[75vh] m-[0] py-[15px] px-[10px] rounded-xl flex flex-row" : "w-screen h-screen"}`}>
      <Sidebar step={step} setStep={setStep} isDesktop={isDesktop} />
      {
        (() => {
          switch (step) {
            case 1:
              return <p className="text-[black]">1</p>;
            case 2:
              return <p className="text-[black]">2</p>;
            case 3:
              return <p className="text-[black]">3</p>;
            case 4:
              return <p className="text-[black]">4</p>;
            default:
              return <p className="text-[black]"> Default </p>;
          }
        })()
      }
    </div>
  )
}

export default Form