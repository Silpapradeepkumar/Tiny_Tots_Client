import React, { useState } from 'react'
import { getAllSchedules, getSchedulesByChildrenId } from '../api/admin';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';

function DoctorHealthRecors() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    React.useEffect(() => {
        fetchAPI();
      }, []);
    

    const fetchAPI = async () => {
        try {
          setLoading(true);
          const response = await getAllSchedules();
          setData(response.result);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      

    
    
  return (
    <div className="bg-white px-4 my-5">
    

    {loading ? (
      <div className="flex justify-center items-center h-screen w-full">

        <Spinner />
      </div>
    ) : (
      <>
      <div className="overflow-x-auto max-h-[500px]">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                Schedule Date
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-4">
                                
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data && data.map((item, index) => {
                              if(item?.status === 'schduled'){

                              return (
                                <tr
                                  key={index}
                                  className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                                >
                                  <td className="flex  capitalize justify-center items-center whitespace-nowrap px-6 py-4  ">
                                  {item.message}
                                  </td>
                                  <td className={`overflow-auto max-w-44 whitespace-nowrap capitalize  px-6 py-4 `}>
                                    
                                  {item?.childrensInfo[0]?.name}
                                  </td>
                                  <Link to={`/doctors/add-health-record/${item.childId}/${item._id}`}>
                <button className="px-8 py-2 rounded-md text-white  border bg-green-600">View</button>
              </Link>
                                </tr>
                              );
                            }

                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
   
          
      </>
    )}
  </div>
  )
}

export default DoctorHealthRecors