import Button from "./Button"
const Sidebar = ({ step, setStep, isDesktop }) => {

    return (
        <div className={`flex ${isDesktop ? "bg-sidebar_desktop w-[30%] rounded-xl flex-col" : "w-screen h-1/5 bg-sidebar_mobile flex-row  items-center justify-center"}`}>
            <Button num={1} step={step} setStep={setStep} />
            <Button num={2} step={step} setStep={setStep} />
            <Button num={3} step={step} setStep={setStep} />
            <Button num={4} step={step} setStep={setStep} />
        </div>
    )
}

export default Sidebar