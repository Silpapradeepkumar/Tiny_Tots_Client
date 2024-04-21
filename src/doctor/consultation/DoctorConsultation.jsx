
import React, { useState } from "react";
import { getChildrensAllByStatusTrueOnly, getChildrensRoleTeacher, getChildrensScheduleByDoctor } from "../../api/teacher";
import Spinner from "../../spinner";
import { errorToast, successToast } from "../../toast";
import { getDoctorById, scheduledByDoctor } from "../../api/admin";
import { Link } from "react-router-dom";

function Doctorchildren() {
  const imageClassName = `w-12 h-12 rounded-full my-3`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [scheduleDate, setScheduleDate] = useState();
  const [schedule, setSchedule] = useState([]);
  const [refresh,setRefresh] = useState(false);
  
  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getChildrensAllByStatusTrueOnly();
      setData(response.result);
      const response_schedule = await getChildrensScheduleByDoctor();
      setSchedule(response_schedule.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSchedule = async(id)=>{

    try {



      if(scheduleDate ===  ''){
        return errorToast('Please fill the field')
      }

    

        await scheduledByDoctor(id,JSON.parse(localStorage.getItem("doctor-details"))?._id,{message:scheduleDate});
        setRefresh(!refresh)
      successToast('Consultation Scheduled')

      } catch (error) {
        errorToast(
          error.response.data.message || error.message || "something went wrong!"
        );
      }
  }



  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col">
          <div className="overflow-x-auto max-h-[500px] ">
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
                        Status
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
                          <td className="flex justify-center whitespace-nowrap px-6 py-4 font-medium ">
                            <img
                              src={item.image}
                              alt={"preview"}
                              loading="lazy"
                              className={imageClassName}
                            />
                          </td>
                          <td className=" overflow-auto capitalize whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>
                      
                              <>

                              {
                                // schedule.find((i)=> i.childId === item._id && i.doctorId === JSON.parse(localStorage.getItem("doctor-details"))?._id ) ?  'scheduled' :
                                 <>
                                                                <td className="whitespace-nowrap px-6 py-4">
                                <input  type="date" placeholder="Date"  onChange={(e)=>setScheduleDate(e.target.value)} className="px-8 py-2 rounded-md text-black  shadow-md me-4 border"/>
                                <button onClick={()=>handleSchedule(item._id)} className="px-8 py-2 rounded-md text-slate-700  border bg-slate-300">submit</button>
                                
                          </td>
                                </> 
                              }
                              
                              </>
                     
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link to={`/doctors/view-doctor-consultation-ofdoctor/${item._id}`}>
                                <button className="px-8 py-2 rounded-md text-white  border bg-green-600">View</button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Doctorchildren;
