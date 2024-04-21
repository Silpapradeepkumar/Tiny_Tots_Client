import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { errorToast, successToast } from "../toast";
import { useNavigate } from "react-router-dom";
import { addingTeacher } from "../api/teacher";

function TeacherRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [housename, setHousename] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  const [IFSCCode, setIFSCCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branch, setBranch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return errorToast(" name is required");
    if (!email) return errorToast(" email is required");
    if (!password) return errorToast(" password is required");
    if (!age) return errorToast(" age is required");
    if (!number) return errorToast(" number is required");
    if (!city) return errorToast(" city is required");
    if (!state) return errorToast(" state is required");
    if (!qualification) return errorToast(" qualification is required");
    if (!gender) return errorToast(" gender is required");
    if (!IFSCCode) return errorToast(" IFSCCode is required");
    if (!accountNumber) return errorToast(" accountNumber is required");
    if (!branch) return errorToast(" branch is required");

    try {
      const data = {
        name,
        email,
        password,
        age,
        number,
        image,
        housename,
        place,
        city,
        state,
        qualification,
        gender,
        IFSCCode,
        accountNumber,
        branch,
      };

      const response = await addingTeacher(data);
      successToast(response?.message || "Successfully Created");
      navigate("/teacher-login");
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "something went wrong!"
      );
    }
  };

  return (
    <form
      className="text-black max-w-md mx-auto mt-10 pb-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl mb-5">Register as Teacher</h1>

      <div className="border py-6 px-7 shadow-lg rounded-md">
        {/* name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>

        {/* email */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        {/* password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        {/* age */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="floating_age"
            id="floating_age"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label
            htmlFor="floating_age"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Age
          </label>
        </div>

        {/* number */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="number"
            id="floating_number"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mobile Number
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male" className="ms-2 text-sm font-medium">
            Male
          </label>

          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="ms-2 text-sm font-medium">
            Female
          </label>

          <input
            type="radio"
            id="other"
            value="other"
            name="gender"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other" className="ms-2 text-sm font-medium">
            Other
          </label>
        </div>

        {/* image */}
        <div className="flex gap-2 items-center my-3">
          <img src={image} alt="" className="w-16 h-16" />
          <FileBase64 onDone={(e) => setImage(e?.base64)} />
          <p onClick={() => setImage("")}>Delete</p>
        </div>

        {/* housename */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="housename"
            id="housename"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={housename}
            onChange={(e) => setHousename(e.target.value)}
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            House Name
          </label>
        </div>

        {/* place */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="place"
            id="place"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Place
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* city */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="city"
              id="city"
              className="block placeholder:text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              htmlFor="floating_first_place"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>

          {/* state */}
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="countries" className="">
              Select State
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="countries"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option selected>Choose a country</option>
              <option value="kerala">Kerala</option>
              <option value="karanataka">Karnataka</option>
              <option value="tamilnadu">Tamil Nadu</option>
            </select>
          </div>
        </div>
        {/* qualification */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="qualification"
            id="qualification"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
          <label
            htmlFor="qualification"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Qualification
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* ifsc code */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="ifsccode"
              id="ifsccode"
              className="block placeholder:text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required=""
              value={IFSCCode}
              onChange={(e) => setIFSCCode(e.target.value)}
            />
            <label
              htmlFor="ifsccode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              IFSC
            </label>
          </div>

          {/* branch */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="branch"
              id="branch"
              className="block placeholder:text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required=""
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <label
              htmlFor="branch"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Branch
            </label>
          </div>

          {/* account number */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="accountnumber"
              id="accountnumber"
              className="block placeholder:text-black py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required=""
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            <label
              htmlFor="accountnumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Account Number
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:bg-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:bg-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default TeacherRegister;
