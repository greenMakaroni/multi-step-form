import Button from "./Button"
const Sidebar = ({ step, setStep, isDesktop }) => {

    const steps =
        [{
            title: "STEP 1",
            text: "YOUR INFO",
        },
        {
            title: "STEP 1",
            text: "YOUR INFO",
        },
        {
            title: "STEP 1",
            text: "YOUR INFO",
        },
        {
            title: "STEP 1",
            text: "YOUR INFO",
        },]


    return (
        <div className={`flex m-0 ${isDesktop ? " bg-[length:100%_100%] bg-sidebar_desktop w-[30%] rounded-xl flex-col px-[25px] py-[40px]" : "w-screen h-1/5 bg-sidebar_mobile flex-row  items-center justify-center"}`}>
            {steps.map((s, index) => {
                return (
                    <div key={index} className="flex flex-row m-[0] my-[10px]">
                         
                         <Button num={index + 1} step={step} setStep={setStep} />
                         <div className="ml-[10px] flex flex-col justify-center">
                             <h1 className=""> {s.title} </h1>
                             <p className="">{s.text}</p>
                         </div>
                    </div>
                    )
            })}
        </div>
    )
}

export default Sidebar