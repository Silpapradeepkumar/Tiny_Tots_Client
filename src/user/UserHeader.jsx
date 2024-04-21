import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function UserHeader() {
  // State variable to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const toggleBtn = document.getElementById("toggle");
    const collapseMenu = document.getElementById("collapseMenu");

    function handleClick() {
      if (collapseMenu.style.display === "block") {
        collapseMenu.style.display = "none";
      } else {
        collapseMenu.style.display = "block";
      }
    }

    toggleBtn.addEventListener("click", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      toggleBtn.removeEventListener("click", handleClick);
    };
  }, [pathname]); // Empty dependency array ensures effect runs only once

  // Function to toggle menu visibility using React state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(pathname, "pathname");

  return (
    <div>
      <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center gap-5 relative">
          <a href="javascript:void(0)">
            <p className="text-lg">Tiny Tots Care</p>
          </a>
          {
            <div className="flex lg:order-1 max-sm:ml-auto">
              <Link>
                <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
                  {Boolean(localStorage.getItem("parent-details"))
                    ? JSON.parse(localStorage.getItem("parent-details")).name
                    : "No Name"}
                </button>
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("parent-token");
                  localStorage.removeItem("parent-details");
                  navigate("/parent-login");
                  window.location.reload();
                }}
                className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3"
              >
                Logout
              </button>

              <button
                id="toggle"
                className="lg:hidden ml-7"
                onClick={toggleMenu}
              >
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          }
          {/* Render menu based on isMenuOpen state */}
          <ul
            id="collapseMenu"
            className={`lg:!flex text-black lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <li className={`max-lg:border-b  max-lg:py-2 px-3 max-lg:rounded`}>
              <Link
                to={"/"}
                className={`lg:hover:text-[#007bff]  ${
                  pathname === "/" && "text-[#007bff]"
                }  block font-semibold text-[15px]`}
              >
                Home
              </Link>
            </li>
            <li className={`max-lg:border-b  max-lg:py-2 px-3 max-lg:rounded`}>
              <Link
                to={"/profile"}
                className={`lg:hover:text-[#007bff]  ${
                  pathname === "/profile" && "text-[#007bff]"
                }  block font-semibold text-[15px]`}
              >
                Profile
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/children"}
                className={`lg:hover:text-[#007bff]  ${
                  pathname === "/children" && "text-[#007bff]"
                }  block font-semibold text-[15px]`}
              >
                Childrens
              </Link>
            </li>
            <Link to={"/healthrecords"}>
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  className={`lg:hover:text-[#007bff]  ${
                    pathname === "/healthrecords" && "text-[#007bff]"
                  }  block font-semibold text-[15px]`}
                >
                  Health Records
                </a>
              </li>
            </Link>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link to={"/childrens-attendance"}>
                <a
                  className={`lg:hover:text-[#007bff]  ${
                    pathname === "/childrens-attendance" && "text-[#007bff]"
                  }  block font-semibold text-[15px]`}
                >
                  Childrens Attendance
                </a>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link to={"/teachers-attendance"}>
                <a
                  className={`lg:hover:text-[#007bff]  ${
                    pathname === "/teachers-attendance" && "text-[#007bff]"
                  }  block font-semibold text-[15px]`}
                >
                  Teachers Attendance
                </a>
              </Link>
            </li>
            <Link to={"/view-user-communication"}>
              <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
                <a
                  className={`lg:hover:text-[#007bff]  ${
                    pathname === "/view-user-communication" && "text-[#007bff]"
                  }  block font-semibold text-[15px]`}
                >
                  Communication
                </a>
              </li>
            </Link>

            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/feedback"}
                className={`lg:hover:text-[#007bff]  ${
                  pathname === "/feedback" && "text-[#007bff]"
                }  block font-semibold text-[15px]`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default UserHeader;
