import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Link } from "react-router-dom";
import { getChildrensRoleTeacher } from "../../api/teacher";
import Spinner from "../../spinner";

function ChildrensAttendance() {
  const imageClassName = `className='w-12 h-12 rounded-full my-3'`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getChildrensRoleTeacher(
        JSON.parse(localStorage.getItem("teacherDetails"))._id
      );
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const attendanceStatus = (status, id) => {};

  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col">
          <Link to={-1}>Back</Link>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                        Attendance
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium ">
                            <img
                              src={item.image}
                              alt={"preview"}
                              loading="lazy"
                              className={imageClassName}
                            />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <select
                              onClick={(e) =>
                                attendanceStatus(e.target.value, item._id)
                              }
                              className="  px-8 py-2 rounded-sm text-black border"
                            >
                              <option value="">Select</option>
                              <option value="present">Present</option>
                              <option value="absent">Absent</option>
                            </select>
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

export default ChildrensAttendance;
