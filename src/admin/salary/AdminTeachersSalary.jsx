import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  getTeachersRoleAdmin, getTeachersWithoutAuth, paySalaryAdmin } from "../../api/admin";
import { errorToast, successToast } from "../../toast";
import Spinner from "../../spinner";
import { IoMdClose } from "react-icons/io";

function ManageTeachersProfile() {
  const imageClassName = `w-12 h-12 rounded-full my-3`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [isModalToggle,setIsModalToggle] = useState(false);
const [amount,setAmount] = useState()
const [date,setDate] = useState()
const [modalData,setModalData] = useState();

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getTeachersWithoutAuth();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  
  const handleModelView = (item)=> {
    setModalData(item)
    setIsModalToggle(!isModalToggle)
  }


  const handleSubmitPaySalary =async (e)=>{
    try {
        e.preventDefault()

        if(!amount) return errorToast(`Amount is required`)
        if(!date) return errorToast(`Month is required`)
        await paySalaryAdmin('teacher',{receiverId:modalData?._id},{date:date,amount:amount});
        successToast('Salary Paid')
        setIsModalToggle(!isModalToggle)
        setAmount('')
        setDate('')
    } catch (error) {
        errorToast(
          error.response.data.message || error.message || "something went wrong!"
        );
      }


    }


    const goToDashBoard = `/admin/salary`;
    const goToParentDir = `/admin/admin-teachers-salary`;
    const breadCrubmberClassName = "hover:text-slate-500 hover:underline";
    const breadCrumbContainer = "flex gap-2 text-[14px] my-3";
  
   

  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-screen items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <>
              <ul className={breadCrumbContainer}>
            <li className={`${breadCrubmberClassName}`}>
              <Link to={goToDashBoard}>Main</Link> <span>/</span>
            </li>
            <li className={`${breadCrubmberClassName}`}>
              <Link to={goToParentDir}>Teacher</Link>
            </li>
          </ul>
        <div className="flex flex-col">
          <div className="overflow-x-auto max-h-[500px]">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Profile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>

                      <th scope="col" className="px-6 py-4">
                      </th>
                      <th scope="col" className="px-6 py-4">

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                        >
                          <td className="flex justify-center items-center whitespace-nowrap px-6 py-4 font-medium ">
                            <img
                              src={item.image}
                              alt={"preview"}
                              loading="lazy"
                              className={imageClassName}
                            />
                          </td>
                          <td className="capitalize overflow-x-auto max-w-44 whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                                <button onClick={()=>handleModelView(item)} className="px-8 py-2 rounded-md text-white  border bg-slate-500">Pay now</button>
                          </td>

                       
                          <td className="whitespace-nowrap px-6 py-4">
                              <Link to={`/admin/view-teacher-salaries/${item._id}/${item.name}`} state={item} >
                                <button className="px-8 py-2 rounded-md text-white  border bg-green-400 ">View</button>
                              </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {   <div className="">
                  {isModalToggle && 
                  
                  <div className="absolute pb-5  w-[450px] max-w-[450px] h-auto px-5 py-0 rounded-lg bg-white shadow-2xl  "style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                  <div className="flex justify-end">
                    <h1 className="mb-4 break-words text-2xl cursor-pointer">
                      {" "}
                      <IoMdClose onClick={()=>{
                        setIsModalToggle(!isModalToggle)
                        
                      }} />{" "}
                    </h1>
                  </div>
                  <form onSubmit={handleSubmitPaySalary} className="grid grid-cols-1 gap-3  font-medium">
                    
                 <div className="mb-3">

                    <input type="number" placeholder="RUPEES : " value={amount} onChange={(e)=>setAmount(e.target.value)} className="shadow-xl border  py-3 text-[20px] text-center px-3 rounded-md" />
                    <input type="month" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)} className="shadow-xl border  py-2 mt-2 px-3 rounded-md" />
                 </div>

                <div className="">
                    <p>Bank details :</p>
                    <input type="text" disabled placeholder="IFSC" value={modalData?.Bankinfo[0]?.IFSCCode}  className="shadow-xl border  py-2  px-3 rounded-md" />
                    <input type="text" disabled placeholder="Branch" value={modalData?.Bankinfo[0]?.branch}  className="shadow-xl border  py-2 mt-1 px-3 rounded-md" />
                    <input type="number" disabled placeholder="Account Number"value={modalData?.Bankinfo[0]?.accountNumber} className="shadow-xl border mt-1 py-2 px-3 rounded-md" />
                </div>

                    <input type="submit" value={'Submit'} placeholder="Activity" className="bg-black text-white py-3 rounded-md cursor-pointer" />

                      

                  </form>
                </div>

                  }
                </div> }



              </div>
            </div>
          </div>
        </div>
        </>

      )}
    </>
  );
}

export default ManageTeachersProfile;
