import Plan from "./Plan"

const plans = [
  {
    image: "./icon-arcade.svg",
    title: "Arcade",
    price: "$9/mo",
  },
  {
    image: "./icon-advanced.svg",
    title: "Advanced",
    price: "$12/mo",
  },
  {
    image: "./icon-pro.svg",
    title: "Pro",
    price: "$15/mo",
  },
]

const Step2 = ({ setStep }) => {
  return (
    <div className="text-[black] border-2 border-red-400 w-[70%] flex flex-col px-[5vw] py-[2vh] h-[100%]">
      <h1 className="font-['Ubuntu'] text-[#02295a] text-[2rem] font-bold"> Select your plan </h1>
      <p className="mb-[5vh] font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]"> You have the option of monthly or yearly billing.</p>
      
      <div className="flex flex-row justify-between w-[100%] h-[35%]">
        {plans.map((plan, index) => {
          return(
            <Plan key={index} image={plan.image} title={plan.title} price={plan.price} />
          )
        })}
      </div>

      <div className="flex flex-row justify-between">
        <button onClick={() => setStep(1)} className="bg-[white] self-end text-[#02295a] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Go Back</button>
        <button onClick={() => setStep(3)} className="bg-[#02295a] self-end text-[white] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Next Step</button>
      </div>
    </div>
  )
}

export default Step2