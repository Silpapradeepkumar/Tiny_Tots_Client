import React, { useState } from 'react'
import { getTeacherAttendancesById } from '../api/teacher';

function ViewTeacherSelefAttendance() {


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refresh,setRefresh] = useState(false);

    React.useEffect(() => {
        fetchAPI();
      }, []);



      const fetchAPI = async () => {
        try {
          setLoading(true);
          const response = await getTeacherAttendancesById(JSON.parse(localStorage.getItem("teacher-details"))?._id,status);
          setData(response.result);

     

          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };


  return (
    <div className='flex flex-col'>
 


<div className="overflow-x-auto max-w-[500px]: ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Status
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
                                  {new Date(item.date).getDate() +' / '+ (new Date(item.date).getUTCMonth()+1 ) + " / " + new Date(item.date).getFullYear()}
                                  </td>
                                  <td className={`overflow-auto max-w-44 whitespace-nowrap capitalize px-6 py-4 `}>
                                    
                                      <p className={`${item.status === "present" ? ' text-green-500 border-green-600 ' : ' text-red-600 border-red-600 '} px-4 py-2 m-auto border w-fit rounded-md  `}>
                                      { item.status === 'present' ? 'Present' : 'Absent' }
                                      </p>
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
  )
}

export default ViewTeacherSelefAttendance