const Button = ({step, setStep, num}) => {
    return (
    <button 
      onClick={() => setStep(num)} 
      className={
          ` 
          flex 
          justify-center 
          items-center 
          w-[40px] 
          h-[40px] 
          rounded-[50%]
          duration-300
          font-extrabold
          m-[5px]
          border-2
          ${step == num ? "bg-[#bfe2fd] text-[#02295a]" : "text-[#ffffff] hover:text-[white]  hover:bg-[#959eac] "}`
      }>
  
      <p className="text-[15px]">{num}</p>
    </button>
    )
  }
  
  export default Button