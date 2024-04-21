import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { getViewAllActivitiesByChildId } from "../api/admin";
import Spinner from "../spinner";

function ViewAllActivity() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id,name } = useParams();

  useEffect(() => {
    if (!id) {
      navigate("/admin/activity");
    }
  }, [id]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getViewAllActivitiesByChildId(id);
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const goToDashBoard = `/admin/activity`;
  const goToParent = `/admin/view-activities/${id}/${name}`
  const breadCrubmberClassName = "hover:text-slate-500 hover:underline";
  const breadCrumbContainer = "flex gap-2 text-[14px] my-3";


  
  return (
    <div className="bg-white px-4 my-5">
    

      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">

          <Spinner />
        </div>
      ) : (
        <>


<ul className={breadCrumbContainer}>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToDashBoard}>Main</Link> <span> / </span>
        </li>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToParent}>{name}</Link> 
        </li>
      </ul>


<div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Activity
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data && data.map((item, index) => {
                              const dateObj = new Date(item.date);
                              const month = dateObj.getUTCMonth() + 1; // months from 1-12
                              const day = dateObj.getUTCDate();
                              const year = dateObj.getUTCFullYear();
                              return (
                                <tr
                                  key={index}
                                  className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                                >
                                  <td className="flex justify-center items-center whitespace-nowrap px-6 py-4 font-medium ">
                                    {`${year} / ${month} / ${day} `}
                                  </td>
                                  <td className={`overflow-auto max-w-44 whitespace-nowrap capitalize px-6 py-4 `}>
                                    
                                      <p className={`px-4 py-2 m-auto  `}>
                                      {item.activityDetails}
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
        </>
      )}
    </div>
  );
}

export default ViewAllActivity;
