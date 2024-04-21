import { Link } from "react-router-dom";

function Doctorcommunication() {
  return (
    <div className="my-5 lg:ms-20 lg-5 flex flex-row justify-start gap-1  text-white ">
      <Link to={'/manage-admin-communication'}>
        <button className="bg-[#007bff] rounded-lg w-32 px-4 py-2 border  ">
          Admin
        </button>
      </Link>
      <Link to={'/manage-doctor-communication'}>
        <button className="bg-[#007bff] rounded-lg w-32 px-4 py-2 ">
          Doctors
        </button>
      </Link>
      <Link to={'/manage-teacher-communication'}>
        <button className="bg-[#007bff] rounded-lg w-32 px-4 py-2 ">
          Teachers
     
        </button>
      </Link>
    </div>
  );
}

export default Doctorcommunication;

