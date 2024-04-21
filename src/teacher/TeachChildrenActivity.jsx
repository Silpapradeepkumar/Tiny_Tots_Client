import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getChildrensRoleTeacher } from "../api/teacher";
import Spinner from "../spinner";
import Modals from "../components/Modals";
import { IoMdClose } from "react-icons/io";
import { addActivityByTeacher } from "../api/admin";
import { errorToast, successToast } from "../toast";

function TeacherAssignment() {
  const imageClassName = `w-12 h-12 rounded-full my-3`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const [isModalToggle,setIsModalToggle] = useState(false);
  const [modalData,setModelData] = useState({});
  const [activity,setActivity] = useState('');
  const [userId,setUserId] = useState('');
  
  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getChildrensRoleTeacher();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  
  const handleModelView = (item)=> {
    setModelData(item)
    setIsModalToggle(!isModalToggle)
  }

  
  const handleSubmitActivity = async(e)=>{
    e.preventDefault()

    if(!activity) return errorToast('Activity is required')
    try {
        const data = {
          activityDetails:activity,
            childrenId:userId
        }
        
        const response = await addActivityByTeacher(data)
         successToast(response?.message || 'Successfully Added')
         setIsModalToggle(!isModalToggle)
    } catch (error) {
        errorToast(error.response.data.message || error.message || 'something went wrong!')
    }
}
  return (
    <>
      {loading && (
        <div className="w-full flex justify-center h-screen items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
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
                          <td className="overflow-x-auto max-w-44 whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                                <button onClick={()=>{
                                  handleModelView(item)
                                  setUserId(item._id)
                                }} className="px-8 py-2  rounded-md text-white  border bg-slate-500">Assign Activity</button>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                                <Link to={`/teacher/view-activites/${item._id}`}>
                                  <button  className="px-8 py-2 rounded-md text-white  border bg-green-500">View Activities</button>
                                </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <>
                 { isModalToggle && <div className="absolute  w-[450px] max-w-[450px] h-[170px] px-5 py-0 rounded-lg bg-white shadow-2xl  "style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <div className="flex justify-end">
                      <h1 className="mb-4 break-words text-2xl">
                        {" "}
                        <IoMdClose className="cursor-pointer" onClick={()=>setIsModalToggle(!isModalToggle)} />{" "}
                      </h1>
                    </div>
                    <form onSubmit={handleSubmitActivity} className="grid grid-cols-1 gap-3  font-medium">
                      
                      <input type="text" placeholder="Activity" value={activity} onChange={(e)=>setActivity(e.target.value)} className="shadow-xl border  py-3 px-3 rounded-md" />
                      <input type="submit" value={'Submit'} placeholder="Activity" className="bg-black cursor-pointer text-white py-3 rounded-md" />
                    </form>
                  </div>}
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherAssignment;
