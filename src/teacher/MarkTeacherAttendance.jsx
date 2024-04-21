import React, { useState } from 'react'
import { errorToast } from '../toast'
import { updateAttendanceByTeacher } from '../api/admin'
import Spinner from '../spinner';
import { getChildrensRoleTeacherByAttendanceBased, getTeacherAttendancesById } from '../api/teacher';

function MarkTeacherAttendance() {


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const [attendanceIsVisible,setAttendanceIsVisible] = useState(false);

    React.useEffect(() => {
        fetchAPI();
      }, [refresh]);



      const fetchAPI = async () => {
        try {
          setLoading(true);
          const response = await getTeacherAttendancesById(JSON.parse(localStorage.getItem("teacher-details"))?._id,status);
          setData(response.result);

          const todayDay = new Date().getDate()
          const todayYear = new Date().getUTCFullYear()
          const todayMonth = new Date().getUTCMonth()+1

          response?.result?.forEach((item) => {
            if (item.date) {
                const attendedDay = new Date(item.date).getDate();
                const attendedMonth = new Date(item.date).getUTCMonth() + 1;
                const attendedYear = new Date(item.date).getUTCFullYear();
                
        
                if (todayDay === attendedDay && todayYear === attendedYear && attendedMonth === todayMonth) {
                    setAttendanceIsVisible(true);
                    return; // Exit the loop when the condition is met
                }
            }
        });

          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };
    


    const handleApprovedOrReject = async(status)=>{

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
          
    
            await updateAttendanceByTeacher('teacher',JSON.parse(localStorage.getItem("teacher-details"))?._id,status);
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
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}
   
   { !loading && 
   
   
 <>
 
 { attendanceIsVisible ?
 
 
 <p className='capitalize flex justify-center items-center shadow-md w-fit px-4 py-5'> 
 <span>today attendance marked</span>
 </p>
 
 :  <div className='flex gap-12 justify-start items-center'>

    <div className=" shadow-lg px-4 py-4 flex gap-3 justify-center items-center">

        <p>  {new Date().getDate()}  / {new Date().getUTCMonth()+1}  /  {new Date().getFullYear()} </p>
        <p> Attendance 
            
                        <select
                          onClick={(e) =>
                            handleApprovedOrReject(e.target.value)
                          }
                          className=" ms-3 px-8 py-2 rounded-sm text-black border"
                          >
                          <option value="">Select</option>
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                        </select>
                    
              </p>
                          </div>
        
    </div>  }
 </>
    
    
    
    }
    </>
  )
}

export default MarkTeacherAttendance