import Plan from "./Plan"
import Switch from "./Switch"

import { useState } from "react"

const plans = [
  {
    image: "./icon-arcade.svg",
    title: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "$90/yr",
  },
  {
    image: "./icon-advanced.svg",
    title: "Advanced",
    monthlyPrice: "$12/mo",
    yearlyPrice: "$120/yr",
  },
  {
    image: "./icon-pro.svg",
    title: "Pro",
    monthlyPrice: "$15/mo",
    yearlyPrice: "$150/yr",
  },
]

const Step2 = ({ setStep }) => {

  const [select, setSelect] = useState("")
  const [s, setSwitch] = useState("Monthly")

  return (
    <div className="text-[black] border-2 border-red-400 w-[70%] flex flex-col px-[5vw] py-[2vh] h-[100%]">
      <h1 className="font-['Ubuntu'] text-[#02295a] text-[2rem] font-bold"> Select your plan </h1>
      <p className="mb-[5vh] font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]"> You have the option of monthly or yearly billing.</p>
      
      <div className="flex flex-row justify-between w-[100%] h-[35%] mb-[4vh]">
        {plans.map((plan, index) => {
          return(
            <Plan key={index} plan={plan} select={select} setSelect={setSelect} s={s}/>
          )
        })}
      </div>
      <Switch s={s} setSwitch={setSwitch}/>
      <div className="flex flex-row justify-between ">
        <button onClick={() => setStep(1)} className="bg-[white] self-end text-[#02295a] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Go Back</button>
        <button onClick={() => setStep(3)} className="bg-[#02295a] self-end text-[white] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Next Step</button>
      </div>
    </div>
  )
}

export default Step2