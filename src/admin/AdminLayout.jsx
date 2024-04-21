import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaCalendarAlt,
  FaClock,
  FaStackExchange,
  FaUser,
} from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { SiYoutubegaming } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { IoIosCash } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { PiContactlessPayment } from "react-icons/pi";

function TeacherLayout() {
  const avatar =
    "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png";

  const [active, setActive] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);

  const handleToggleUser = () => setToggleUser(!toggleUser);

  const navigate = useNavigate();

  useEffect(() => {
    const adminLogin = localStorage.getItem("admin-token");
    const adminDetails = JSON.parse(localStorage.getItem("admin-details"));

    if (!adminLogin || !adminDetails) {
      navigate("/admin-login", { state: { from: "/protected-route" } });
    }
  }, [navigate]);

  return (
    <div>
      <div className="">
        <div className="shadow-md py-2.5 flex items-center justify-between mx-4">
          <div className="flex gap-3 items-center  ">
            <img onClick={()=>navigate('/admin')} src={ JSON.parse(localStorage.getItem("admin-details"))?.image || avatar} alt="avatar" className="cursor-pointer object-cover rounded-full w-12 h-12" />
            <span onClick={()=>navigate('/admin')} className="cursor-pointer">Tiny Tots Care</span>
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
                  {Boolean(localStorage.getItem("admin-details"))
                    ? JSON.parse(localStorage.getItem("admin-details")).name
                    : "No Name"}
                </span>{" "}
                {toggleUser ? <FaAngleUp /> : <FaAngleDown />}{" "}
              </span>
            </div>
            {toggleUser && (
              <div
                className={`top-16 right-0 py-2  absolute max-w-40 w-40 bg-white text-black text-sm`}
              >
                <Link to={"/admin/profile"}>
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
                  <p
                    onClick={()=>{
                      localStorage.removeItem("admin-details")
                      localStorage.removeItem("admin-token")
                      navigate('/admin-login')
                      window.location.reload()
                    }}
                    className="text-red-600 py-1.5 ps-4 hover:bg-gray-300 flex items-center gap-2 text-gray-500 transition-all ease-in-out hover:text-black font-medium"
                  >
                    {" "}
                    <span>
                      <IoIosLogOut color="red" />{" "}
                    </span>{" "}
                    Logout
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex ">
          <div className="max-w-60 w-60  px-2.5 pt-5 bg-white shadow-2xl rounded-lg h-screen ">
            <Link to={"/admin/manage-profile"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <MdManageAccounts size={20} />
                </span>{" "}
                Manage Profile{" "}
              </p>
            </Link>

            

            
            
            <Link to={"/admin/communication"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <CiChat1 size={20} />
                </span>{" "}
                Communication{" "}
              </p>
            </Link>
            <Link to={"/admin/health-records"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <MdOutlineHealthAndSafety size={20} />
                </span>{" "}
                Health Records{" "}
              </p>
            </Link>
            <Link to={'/admin/salary'}>
            <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
              {" "}
              <span>
                <IoIosCash size={20} />
              </span>{" "}
              Salary{" "}
            </p>
            </Link>
            <Link to={'/admin/admin-attendance'}>
            <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
              {" "}
              <span>
                <SlCalender size={20} />
              </span>{" "}
              Attendance{" "}
            </p>
            </Link>
            <Link to={'/admin/activity'}>
            <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
              {" "}
              <span>
                <SiYoutubegaming size={20} />
              </span>{" "}
              Activity{" "}
            </p>
            </Link>
            <Link to={'/admin/feedback'}>

            <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
              {" "}
              <span>
                <VscFeedback size={20} />
              </span>{" "}
              Feedback{" "}
            </p>
            </Link>

            <Link to={"/admin/fee-management"}>
              <p className="px-3 hover:ps-5  flex transition-all ease-in-out duration-200 cursor-pointer items-center gap-3 hover:bg-green-600 hover:font-medium hover:text-white py-4 rounded-lg">
                {" "}
                <span>
                  <PiContactlessPayment size={20} />
                </span>{" "}
                Fee Management{" "}
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
