import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getTeachersWithoutAuth } from "../api/admin";
import Spinner from "../spinner";

function AdminTeachersLists() {
  const imageClassName = `w-12 h-12 rounded-full my-3`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

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

  const goToDashBoard = `/admin/admin-attendance`;
  const goToParentDir = `/admin/admin-teachers-lists`;
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
        <div className="flex flex-col">
      <ul className={breadCrumbContainer}>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToDashBoard}>Main</Link> <span>/</span>
        </li>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToParentDir}>Teacher</Link>
        </li>
      </ul>
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
                          <td className="overflow-auto max-w-44 whitespace-nowrap capitalize px-6 py-4">
                            {item.name}
                          </td>  
                          <td className="whitespace-nowrap px-6 py-4">
                              <Link to={`/admin/view-teachers-attendance/${item._id}/${item.name}`} >
                                <button className="px-8 py-2 rounded-md text-white  border bg-green-400 ">View</button>
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

export default AdminTeachersLists;
