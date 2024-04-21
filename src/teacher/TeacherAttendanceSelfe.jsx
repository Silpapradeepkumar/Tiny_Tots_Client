import React from 'react'
import { Link } from 'react-router-dom'

function TeacherAttendanceSelfe() {
  return (
    <div className="my-5 flex flex-row justify-start gap-1  text-white ">
    <Link to={'/teacher/mark-teacher-attendance'}>
      <button className="bg-green-500 rounded-lg w-fit px-4 py-2 hover:bg-green-400 border  ">
        Today Attendance 
      </button>
    </Link>
    <Link to={'/teacher/view-self-teacher-attendance'}>
      <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
        View
      </button>
    </Link>
  </div>
  )
}

export default TeacherAttendanceSelfe