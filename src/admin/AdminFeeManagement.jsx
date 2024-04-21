import React, { useState } from "react";
import { errorToast, successToast } from "../toast";
import { addFees, deleteFee, editFee, getFee } from "../api/admin";
import Spinner from "../spinner";
import { Link } from "react-router-dom";
import { PiStudent } from "react-icons/pi";

function AdminFeeManagement() {
  const [amount, setAmount] = useState("");
  const [isVisibleForm, setIsVisibleForm] = useState(true);
  const [isEditData, setIsEditData] = useState({});
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const FlexCenterStyleClassName = `flex w-full h-screen justify-center items-center`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount) return errorToast("Amount is required");

    try {
      const data = {
        amount,
      };
      const response = await addFees(data);
      setRefresh(!refresh);

      successToast(response?.message || "Successfully Created");
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "something went wrong!"
      );
    }
  };

  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getFee();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleEdit = (data)=>{
    setIsEditVisible(!isEditVisible)
    setIsVisibleForm(false)
    setIsEditData(data)
    setAmount(data.amount)
  }


  const onSubmitEdit = async(e)=>{
    e.preventDefault();

    if (!amount) return errorToast("Amount is required");

    try {
      const data = {
        amount,
        _id:isEditData._id
      };
      const response = await editFee(data);
      setRefresh(!refresh);

      successToast(response?.message || "Successfully Created");
    } catch (error) {
      errorToast(
        error.response.data.message || error.message || "something went wrong!"
      );
    }
  }
  const handleDelete = async(id)=>{
    try {
         await deleteFee(id);
         setIsEditVisible(false)
        setRefresh(!refresh)
      } catch (error) {
        errorToast(error.response.data.message || error.message ||'error occur!')
      }
  }

  const buttonClassName = `text-black cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white shadow-md hover:text-[#18ba43] h-10 hover:border-green-600 border border-double px-5`;
  const svgForChildren = <PiStudent />;
  return (
    <div>
      {loading ? (
        <div className={FlexCenterStyleClassName}>
          <div className=" w-full flex justify-center h-screen items-center">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
     
          {
            (data.length < 1) &&
              <div 
              className="mt-5 w-fit"
              onClick={() => {
                setIsVisibleForm(!isVisibleForm)
                setIsEditVisible(false)
            }}>
              <button className={`${buttonClassName}`}>
              {isVisibleForm ? "Hide" : "Add"}
              </button>
            </div>
          }

          { data.length < 1 && isVisibleForm && (
            <form className="mt-4 ms-4 max-w-md" onSubmit={handleSubmit}>
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                placeholder="Amount"
                className="w-full px-3 py-3 border rounded-md"
              />{" "}
              <br />
              <input
                type="submit"
                value={"Submit"}
                className="px-6 py-3 w-full border rounded-md my-2 bg-green-600 text-white"
              />
            </form>
          )}



{isEditVisible && (
            <form className="mt-4 ms-4 max-w-md" onSubmit={onSubmitEdit}>
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                placeholder="Amount"
                className="w-full px-3 py-3 border rounded-md"
              />{" "}
              <br />
              <input
                type="submit"
                value={"Update"}
                className="px-6 py-3 w-full border rounded-md my-2 bg-green-600 text-white"
              />
            </form>
          )}


<div className="flex items-start ms-10 mt-4 justify-start gap-2 flex-col">
        {data &&
          data.map((item) => {
            return (
              <div
                className="text-lg flex items-center justify-center gap-3 "
                key={item._id}
              >
                <p>&#8377; {item.amount}</p>
                <span onClick={()=>handleEdit(item)} className="block text-sm hover:underline">edit</span>
                <span onClick={()=>handleDelete(item._id)} className="text-red-500 block text-sm hover:underline">delete</span>
              </div>
            );
          })}
      </div>
        </>
      )}

     
    </div>
  );
}

export default AdminFeeManagement;
