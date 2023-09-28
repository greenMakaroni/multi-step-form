
const AddOn = ({ addOn, s }) => {
    return (
        <div className="m-[5px] border-2 rounded-lg hover:border-[#02295a] flex flex-row justify-between items-center">
            <div className="flex flex-row">
                <div className="p-[25px] flex items-center justify-center"> tick </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-['Ubuntu'] text-[#02295a] text-[1rem] font-bold">{addOn.title}</h1>
                    <p className="font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]">{addOn.desc}</p>
                </div>
            </div>
            <p className="pr-[20px] font-['Ubuntu'] text-[16px] font-[300] text-[#02295a]">{ s == "Monthly" ? `$${addOn.monthlyPrice}/mo` : `$${addOn.yearlyPrice}/yr` }</p>
        </div>
    )
}

export default AddOn