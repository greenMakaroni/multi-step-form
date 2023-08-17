import Button from "./Button"
const Sidebar = ({ step, setStep, isDesktop }) => {

    const steps =
        [{
            title: "STEP 1",
            text: "YOUR INFO",
        },
        {
            title: "STEP 2",
            text: "SELECT PLAN",
        },
        {
            title: "STEP 3",
            text: "ADD-ONS",
        },
        {
            title: "STEP 4",
            text: "SUMMARY",
        },]

    return (
        <div className={`flex ${isDesktop ? " bg-cover bg-sidebar_desktop w-[30%] rounded-xl flex-col ml-[5px] px-[25px] py-[25px]" : "bg-cover w-screen h-1/5 bg-sidebar_mobile flex-row items-center justify-center"}`}>
            {steps.map((s, index) => {
                return (
                    <div key={index} className={`flex flex-row m-[0] my-[10px] ${!isDesktop && "mx-[5px] mt-[-30px]"}`}>
                        <Button num={index + 1} step={step} setStep={setStep} />
                        {isDesktop &&
                            <div className="ml-[10px] flex flex-col justify-center">
                                <h1 className=" text-[15px] text-[#adbeff] font-['Ubuntu'] font-[00]"> {s.title} </h1>
                                <p className=" font-bold text-[15px] tracking-widest font-['Ubuntu'] font-[500]">{s.text}</p>
                            </div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar