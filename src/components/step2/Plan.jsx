
const Plan = ({ plan, select, setSelect, s }) => {

  const isSelected = plan.title == select

  return (
    <div onClick={() => setSelect(plan.title)} className={`${isSelected && "border-[#02295a] bg-[#bfe2fd]"} hover:border-[#02295a] flex flex-col border-2 justify-between w-[30%] rounded-2xl p-[20px]`}>
        <img className="w-[45px]" src={plan.image} alt={`${plan.title} plan icon`} />
        <div className="flex flex-col">
            <h1 className="font-['Ubuntu'] text-[#02295a] text-[1rem] font-bold">{plan.title}</h1>
            <p className="font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]">{ s == "Monthly" ? plan.monthlyPrice : plan.yearlyPrice }</p>
       {s == "Yearly" &&  <p className="font-['Ubuntu'] text-[16px] font-[300] text-[#02295a]"> 2 months free </p>
}
        </div>
    </div>
  )
}

export default Plan