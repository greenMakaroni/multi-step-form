const Step1 = ({ personalInfo, setPersonalInfo }) => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // convert to json
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <div className="text-[black] w-[70%] flex flex-col px-[75px] py-[25px]">
      <h1 className="font-['Ubuntu'] text-[#02295a] text-[2rem] font-bold"> Personal info </h1>
      <p className="mb-[40px] font-['Ubuntu'] text-[16px] font-[500] text-[#9699ab]"> Please provide your name, email address, and phone number.</p>

      <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
        <label className="text-[#02295a] mb-[5px] font-['Ubuntu'] font-[500]" htmlFor="name">Name</label>
        <input 
        name="name" 
        className="text-[#02295a] p-[15px] mb-[2vh] rounded-lg bg-white border-2 " 
        type="text" 
        defaultValue={personalInfo.name}
        placeholder="Your name here"
        /> 

        <label className="text-[#02295a] mb-[5px] font-['Ubuntu'] font-[500]" htmlFor="email">Email Address</label>
        <input 
        name="email" 
        className="text-[#02295a] p-[15px] mb-[2vh] rounded-lg bg-white border-2 " 
        type="text" 
        defaultValue={personalInfo.email}
        placeholder="example@gmail.com"
        />

        <label className="text-[#02295a] mb-[5px] font-['Ubuntu'] font-[500]" htmlFor="phone">Phone Number</label>
        <input 
        name="phone" 
        className="text-[#02295a] p-[15px] mb-[2vh] rounded-lg bg-white border-2 " 
        type="text" 
        defaultValue={personalInfo.phone}
        placeholder="e.g. +1 234 567 890"
        />

        <button className="bg-[#02295a] self-end mt-[13vh] text-[white] font-[500] tracking-wider rounded-lg w-[150px] px-[20px] py-[15px]" type="submit">Next Step</button>
      </form>
    </div>
  )
}

export default Step1