import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getChildrensRoleTeacher, getChildrensRoleTeacherByAttendanceBased } from "../api/teacher";
import Spinner from "../spinner";
import Modals from "../components/Modals";
import { errorToast } from "../toast";
import { updateAttendanceByTeacher, updateStatus } from "../api/admin";

function TeachChildrenAttendance() {
  const imageClassName = `w-12 h-12 rounded-full my-3`;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const [isModalToggle,setIsModalToggle] = useState(false);
  const [modalData,setModelData] = useState({});
  const [attendanceStatus,setAttendanceStatus] = useState(false);
  
  
  React.useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getChildrensRoleTeacherByAttendanceBased();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleApprovedOrReject = async(id,status)=>{

    try {

      if(status ===  ''){
        return errorToast('Please choose anyone')
      }

      if(status === 'present'){
        status = 'present'
      }

      if(status === 'absent'){
        status = 'absent'
      }
      

        await updateAttendanceByTeacher('children',id,status);
        setRefresh(!refresh)
      } catch (error) {
        errorToast(
          error.response.data.message || error.message || "something went wrong!"
        );
      }
  }

  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-screen items-center">
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
                  Status
                </th>

                <th scope="col" className="px-6 py-4">

                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const attendanceForCurrentDay = item?.attendance?.find(att => {
                  const attendanceDate = new Date(att.date);
                  const currentDate = new Date();
                  return (
                    attendanceDate.getUTCFullYear() === currentDate.getUTCFullYear() &&
                    attendanceDate.getUTCMonth() === currentDate.getUTCMonth() &&
                    attendanceDate.getUTCDate() === currentDate.getUTCDate()
                  );
                });
                return (
                  <tr
                    key={index}
                    className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium ">
                      <img
                        src={item.student.image}
                        alt={"preview"}
                        loading="lazy"
                        className={imageClassName}
                      />
                    </td>
                    <td className="capitalize overflow-x-auto max-w-44 whitespace-nowrap px-6 py-4">
                      {item.student.name}
                    </td>
                    {!attendanceForCurrentDay && (
                      <td className="whitespace-nowrap px-6 py-4">
                        <select
                          onClick={(e) =>
                            handleApprovedOrReject(item.student._id, e.target.value)
                          }
                          className="  px-8 py-2 rounded-sm text-black border"
                        >
                          <option value="">Select</option>
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                        </select>
                      </td>
                    )}
                    <Link to={`/teacher/view-attendance/${item.student._id}`}>
                      <td className="overflow-x-auto max-w-44 whitespace-nowrap px-6 py-4">
                        View Attendance
                      </td>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {isModalToggle && <div className="">
            <Modals statusField={false} {...modalData} setIsModalToggle={setIsModalToggle} isModalToggle={isModalToggle} />
          </div>}
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default TeachChildrenAttendance;
