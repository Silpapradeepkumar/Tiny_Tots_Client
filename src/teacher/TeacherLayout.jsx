import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillAlt,
  FaStackExchange,
  FaUser,
} from "react-icons/fa";
import { CiCalendar, CiChat1 } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
function TeacherLayout() {
  const avatar =
    "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";

  const [active, setActive] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);

  const handleToggleUser = () => setToggleUser(!toggleUser);

  const navigate = useNavigate();

  useEffect(() => {
    const teacherToken = localStorage.getItem("teacher-token");
    const teacherDetails = localStorage.getItem("teacher-details");

    if (!teacherToken || !teacherDetails) {
      navigate("/teacher-login", { state: { from: "/protected-route" } });
    }
  }, [navigate]);

  return (
    <div>
      <div className="">
        <div className="shadow-md py-2.5 flex items-center justify-between mx-4">
          <div className="flex gap-3 items-center  ">
            <img src={ JSON.parse(localStorage.getItem("teacher-details"))?.image || avatar} alt="" className="rounded-full w-12 h-12" />
            <span className="uppercase">logo here</span>
          </div>
          <div className="flex gap-2 relative">
            <div
              className="flex items-center gap-2 hover:border hover:rounded-xl px-3 py-2 cursor-pointer"
              onClick={handleToggleUser}
            >
              <RxAvatar size={30} />
              <span className=" gap-2 items-center flex">
                {" "}
                <span className="uppercase">
                  {JSON.parse(localStorage.getItem("teacher-details"))?.name}
                </span>{" "}
                {toggleUser ? <FaAngleUp /> : <FaAngleDown />}{" "}
              </span>
            </div>
            {toggleUser && (
              <div
                className={`top-16 right-0 py-2  absolute max-w-40 w-40 bg-white text-black text-sm`}
              >
                <Link to={"/teacher/teacher-profile"}>
                  <p
                    onClick={handleToggleUser}
                    className="py-1.5 ps-4 hover:bg-gray-300 flex items-center gap-2 text-gray-500 transition-all ease-in-out hover:text-black font-medium"
                  >
                    {" "}
                    <span>
                      <FaUser />{" "}
                    </span>{" "}
                    Profile
                  </p>
                </Link>



                
                <p
                    onClick={()=>{
                      localStorage.removeItem("teacher-details")
                      localStorage.removeItem("teacher-token")
                      navigate('/teacher-login')
                      window.location.reload()
                    }}
                    className="text-red-600 py-1.5 ps-4 hover:bg-gray-300 flex items-center gap-2  transition-all ease-in-out hover:text-black font-medium"
                  >
                    {" "}
                    <span>
                      <IoIosLogOut color="red" />{" "}
                    </span>{" "}
                    Logout
                  </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex ">
          <div className="max-w-60 w-60  px-2.5 pt-5 bg-white shadow-2xl rounded-lg h-screen ">
            <Link to={"/teacher/teacher-attendance"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <FaCalendarAlt size={20} />
                </span>{" "}
                Attendance{" "}
              </p>
            </Link>
            <Link to={"/teacher/childrens"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <FaUser size={20} />
                </span>{" "}
                Childrens{" "}
              </p>
            </Link>
            <Link to={"/teacher/activity"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <SiYoutubegaming size={20} />
                </span>{" "}
                Activity{" "}
              </p>
            </Link>
            <Link to={"/teacher/children-attendance"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <SlCalender size={20} />
                </span>{" "}
                Children Attendance{" "}
              </p>
            </Link>
            <Link to={"/teacher/health-records"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <MdOutlineHealthAndSafety size={20} />
                </span>{" "}
                Health Records{" "}
              </p>
            </Link>
            <Link to={"/teacher/salary"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <FaMoneyBillAlt size={20} />
                </span>{" "}
                Salary{" "}
              </p>
            </Link>
            <Link to={"/teacher/communication"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <CiChat1 size={20} />
                </span>{" "}
                Communication{" "}
              </p>
            </Link>
            <Link to={"/teacher/feedback"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                <VscFeedback size={20} />
                </span>{" "}
                Feedback{" "}
              </p>
            </Link>
          </div>
          <div className="mx-4 w-full rounded-lg px-0 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLayout;
