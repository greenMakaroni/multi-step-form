
const Switch = ({s, setSwitch}) => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-[#f6f7ff] w-[100%] h-[10%] mb-[50px]">
        <p className={`${s == "Monthly" ? "text-[#02295a]" : "text-[#9699ab]"} font-['Ubuntu']  text-[1rem] font-bold`}>
            Monthly
        </p>
        <div onClick={() => s == "Monthly" ? setSwitch("Yearly") : setSwitch("Monthly")} className={`${s == "Monthly" ? "justify-start" : "justify-end"} rounded-3xl flex items-center p-[3px] bg-[#02295a] w-[50px] mx-[30px] h-[25px]`}>
            <div className="bg-white rounded-full w-[20px] h-[20px]"></div>
        </div>
        <p className={`${s == "Yearly" ? "text-[#02295a]" : "text-[#9699ab]"} font-['Ubuntu'] text-[#02295a] text-[1rem] font-bold`}>
            Yearly
        </p>
    </div>
  )
}

export default Switch