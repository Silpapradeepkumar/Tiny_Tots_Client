import { FaBars } from "react-icons/fa"
import { Outlet, useNavigate } from "react-router-dom"

function Reject() {

  const navigate = useNavigate()

  return (
    <div className="">
      <div className="flex gap-5">
        <div onClick={() => navigate('/admin/accept/acceptteacher')} className="py-3 flex items-center gap-3 hover:bg-gray-600 hover:text-black justify-center border-2 bg-gray-200 px-5 rounded-lg">
          <FaBars />
          <span>Teachers</span>
        </div>

        <div onClick={() => navigate('/admin/accept/acceptchildren')} className="py-3 flex items-center gap-3  hover:bg-gray-600 hover:text-black justify-center  border-2 bg-gray-200 px-5 rounded-lg">
          <FaBars />
          <span>Children</span>
        </div>


        <div onClick={() => navigate('/admin/accept/acceptdoctor')} className="py-3 flex items-center gap-3  hover:bg-gray-600 hover:text-black justify-center  border-2  bg-gray-200 px-5 rounded-lg">
          <FaBars />
          <span>Doctor</span>
        </div>

        <div onClick={() => navigate('/admin/accept/acceptparents')} className="py-3 flex items-center gap-3  hover:bg-gray-600 hover:text-black justify-center  border-2 bg-gray-200 px-5 rounded-lg">
          <FaBars />
          <span>Parent</span>
        </div>








      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Reject
