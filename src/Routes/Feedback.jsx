import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDoctorDescription,
  addFeedback,
  getFeedback,
  updateDoctorByIdAdmin,
} from "../api/admin";
import { errorToast, successToast } from "../toast";

function Feedback() {
  const [description, setDescription] = useState("");

  const className = `rounded-md border appearance-none px-4 py-3 outline-none bg-slate-50 shadow-md text-sm`;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [isVisisbeForm, setIsVisisbeForm] = useState(true);

  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getFeedback();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        description,
        date: new Date(),
        sender: JSON.parse(localStorage.getItem("parent-details"))?._id,
      };

      const response = await addFeedback(data);
      successToast(response?.message || "Successfully Updated");
      navigate("/feedback");
      setRefresh(!refresh);
      setDescription('')
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "something went wrong!"
      );
    }
  };

  return (
    <div className="pt-10">
      <div className="flex items-start lg:ms-20 ms-5">
        {isVisisbeForm && (
          <button
            onClick={() => setIsVisisbeForm(!isVisisbeForm)}
            className=" w-fit px-10 py-2 mt-2 rounded-md bg-[#007bff] ms-2 text-white tex-sm font-medium"
          >
            New Feedback{" "}
          </button>
        )}
      </div>

      <div className="flex  w-full   h-[450px] gap-4 px-20">
        {!isVisisbeForm && (
          <form
            className="flex-1 ps-10 h-[200px]  rounded-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl ms-0 mb-4">Feedback</h1>
            <div className="grid grid-cols-2 gap-1 ">
              <textarea
                className={className}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" w-fit px-10 py-2 mt-2 rounded-md bg-green-500 text-white tex-sm font-medium"
            >
              Submit
            </button>
            <button
              onClick={() => setIsVisisbeForm(!isVisisbeForm)}
              type="button"
              className=" w-fit px-10 py-2 mt-2 rounded-md bg-gray-300 ms-2 text-black tex-sm font-medium"
            >
              Close
            </button>
          </form>
        )}
        <div className="overflow-auto flex-1 h-[300px]  rounded-lg">

            {data &&
            data.map((item) => {
                return (
                    <p className="px-4 py-5 border rounded-lg m-2" key={item._id}>
                    {item.description}
                </p>
                );
            })}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
