import AddOn from "./AddOn"
import addOns from "./addOnData.js"
const Step3 = ({ setStep, s }) => {
  return (
    <div className="text-[black] w-[70%] flex flex-col px-[5vw] py-[2vh] h-[100%] justify-between">
      <div className="flex flex-col">
        <h1 className="font-['Ubuntu'] text-[#02295a] text-[2rem] font-bold"> Pick add-ons </h1>
        <p className="mb-[5vh] font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]"> Add-ons help enhance your gaming experience.</p>
        {addOns.map((addOn, index) => {
          return <AddOn key={index} addOn={addOn} s={s} />
        })}
      </div>



      <div className="flex flex-row justify-between">
        <button onClick={() => setStep(2)} className="bg-[white] self-end text-[#02295a] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Go Back</button>
        <button onClick={() => setStep(4)} className="bg-[#02295a] self-end text-[white] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" >Next Step</button>
      </div>
    </div>
  )
}

export default Step3