import React from "react";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";

function AdminSalary() {

  const buttonClassName = `text-black cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white shadow-md hover:text-[#18ba43] h-10 hover:border-green-600 border border-double px-5`;
  const mainContainerCLassName = `my-5 flex flex-row justify-start gap-2  text-white`;
  const LinkForTeacher = `/admin/admin-teachers-salary`;
  const LinkForDoctor = `/admin/admin-doctors-salary`;
  const svgForTeacher = <GiTeacher />;
  const svgForChildren = <PiStudent />;
  const goToDashBoard = `/admin/salary`;
  const breadCrubmberClassName = "hover:text-slate-500 hover:underline";
  const breadCrumbContainer = "flex gap-2 text-[14px] my-3";


  return (
    <>

<ul className={breadCrumbContainer}>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToDashBoard}>Main</Link>
        </li>
      </ul>
      <div className={`${mainContainerCLassName}`}>
        <Link to={LinkForTeacher}>
          <button className={`${buttonClassName}`}>
            {svgForTeacher} Teachers
          </button>
        </Link>
        <Link to={LinkForDoctor}>
          <button className={`${buttonClassName}`}>
            {svgForChildren} Doctors
          </button>
        </Link>
      </div>
    </>
  );
}

export default AdminSalary;
