import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { getSalaries, getViewAllActivitiesByChildId } from "../../api/admin";
import Spinner from "../../spinner";

function TeachChildrenViewActivity() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id,name } = useParams();

  useEffect(() => {
    if (!id) {
      navigate("/admin/salary");
    }
  }, [id]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getSalaries(id);
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  const goToDashBoard = `/admin/salary`;
  const goToParentDir = `/admin/admin-teachers-salary`;
  const goToCurrent = `/admin/view-teacher-salaries/${id}/${name}`;
  const breadCrubmberClassName = "hover:text-slate-500 hover:underline";
  const breadCrumbContainer = "flex gap-2 text-[14px] my-3";


  

  
  return (
    <div className="bg-white px-4 my-5">
    

      {loading ? (
        
    <div className=" w-full flex justify-center h-screen items-center">
    <Spinner />
  </div>
      ) : (
        <>
         <ul className={breadCrumbContainer}>
            <li className={`${breadCrubmberClassName}`}>
              <Link to={goToDashBoard}>Main</Link> <span>/</span>
            </li>
            <li className={`${breadCrubmberClassName}`}>
              <Link to={goToParentDir}>Teacher</Link> <span>/</span>
            </li>
            <li className={`${breadCrubmberClassName}`}>
              <Link to={goToCurrent}>{name}</Link>
            </li>
          </ul>
         

<div className="overflow-x-auto max-h-[500px]">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Amount
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
                                  {new Date(item.date).getUTCMonth()+1} / {new Date(item.date).getUTCFullYear()}
                                  </td>
                                  <td className={`overflow-auto max-w-44 whitespace-nowrap capitalize font-bold text-[18px] px-6 py-4 `}>
                                    
                                  &#8377; {item.amount}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
        </>
      )}
    </div>
  );
}

export default TeachChildrenViewActivity;
