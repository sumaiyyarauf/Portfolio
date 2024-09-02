import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });
  const [firstNameGive, setFirstNameGive] = useState(true);
  const [lastNameGive, setLastNameGive] = useState(true);
  const [Emailgive, setEmailgive] = useState(true);
  const [submit, setsubmit] = useState(false);
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (formData.FirstName === "") {
      setFirstNameGive(false);
    } else {
      setFirstNameGive(true);
    }
    if (formData.LastName === "") {
      setLastNameGive(false);
    } else {
      setLastNameGive(true);
    }
    if (formData.Email === "") {
      setEmailgive(false);
    } else {
      setEmailgive(true);
    }
    if (
      formData.FirstName !== "" &&
      formData.LastName !== "" &&
      formData.Email !== ""
    ) {
      setsubmit(true);
    }
  };
  return (
    <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:pt-[55px] max-lg:pb-[151px] bg-pink-200 flex max-lg:flex-col max-lg:gap-[52px] max-lg:items-center justify-between py-[101px]">
      <div className="flex flex-col">
      <h1 className="text-[36px] max-lg:text-center text-black capitalize leading-[120%] font-semibold">
      Get in Touch
      </h1>
      <p className="mt-[40px] text-semibold">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, please feel free to reach out.
      </p>
      </div>
      <form
        className="w-[560px] max-md:w-full max-xl:w-[480px] relative transition-all duration-300 hover:shadow-[0px_0px_80px_#00000033] flex flex-col gap-[20px] bg-[white] px-[20px] py-[24px] rounded-[13px]"
        action=""
      >
        <div className="flex max-md:flex-col gap-[20px]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor=""
                className={firstNameGive ? "text-black" : "text-[red]"}
              >
                First Name:
              </label>
              {firstNameGive === false && (
                <span className="text-[red]">required*</span>
              )}
            </div>
            <input
              type="text"
              onChange={HandleChange}
              name="FirstName"
              placeholder="Enter Your First Name"
              className={
                firstNameGive
                  ? "border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]"
                  : "border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              }
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label
                htmlFor=""
                className={lastNameGive ? "text-black" : "text-[red]"}
              >
                Last Name:
              </label>
              {lastNameGive === false && (
                <span className="text-[red]">required*</span>
              )}
            </div>{" "}
            <input
              type="text"
              name="LastName"
              onChange={HandleChange}
              placeholder="Enter Your Last Name"
              className={
                lastNameGive
                  ? "border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]"
                  : "border-[1px] w-[250px] max-md:w-full max-xl:w-[200px] mt-[6px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
              }
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <label
              htmlFor=""
              className={Emailgive ? "text-black" : "text-[red]"}
            >
              Email:
            </label>
            {Emailgive === false && (
              <span className="text-[red]">required*</span>
            )}
          </div>{" "}
          <input
            type="text"
            name="Email"
            onChange={HandleChange}
            placeholder="Enter Your Email"
            className={
              Emailgive
                ? "border-[1px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]"
                : "border-[1px] mt-[6px] border-[red] placeholder:text-[red] pl-[12px] py-[7px] rounded-[7px]"
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone Number:</label>
          <input
            type="number"
            name="PhoneNumber"
            onChange={HandleChange}
            placeholder="Enter Your Phone Number"
            className="border-[1px] mt-[6px] border-black pl-[12px] py-[7px] rounded-[7px]"
          />
        </div>
        <div>
          <label htmlFor="">Message:</label>
          <textarea
            name="Message"
            id=""
            onChange={HandleChange}
            placeholder="Enter Your Message"
            className="border-[1px] h-[120px] mt-[6px] w-full resize-none border-black pl-[12px] py-[7px] rounded-[7px]"
          ></textarea>
        </div>
        <button
          onClick={HandleSubmit}
          className="border-black border-[1px] hover:bg-pink-800 hover:text-white transition-all duration-300 py-[12px] px-[35px] rounded-[5px]"
        >
          Submit
        </button>
        {submit && <div className="absolute max-lg:left-0 max-lg:bottom-[-100px] max-lg:w-full max-lg:pl-[16px] left-[-220px] bottom-[0px] shadow-[0px_0px_50px_#00000033] bg-white h-[80px] flex items-center rounded-[13px] w-[200px] text-center">Your Form Have been Submitted</div>}
      </form>
    </section>
  );
}

export default Form;
