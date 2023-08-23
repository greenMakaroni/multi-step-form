
const Plan = ({ image, title, price }) => {
  return (
    <div className={`hover:border-[#02295a] flex flex-col border-2 justify-between w-[30%] rounded-2xl p-[10px]`}>
        <img className="w-[45px]" src={image} alt={`${title} plan icon`} />
        <div className="flex flex-col">
            <h1 className="font-['Ubuntu'] text-[#02295a] text-[1rem] font-bold">{title}</h1>
            <p className="font-['Ubuntu'] text-[16px] font-[300] text-[#9699ab]">{price}</p>
        </div>
    </div>
  )
}

export default Plan