import React from "react";
import { Link } from "react-router-dom";

function ViewTeachersCommunication() {
  return (
    <div className="my-5 flex flex-row justify-start gap-1  text-white ">
      <Link to={'/teacher/manage-admin-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400 border  ">
          Admin
        </button>
      </Link>
      <Link to={'/teacher/manage-parents-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Parents
        </button>
      </Link>
      <Link to={'/teacher/manage-doctors-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Doctors
        </button>
      </Link>
    </div>
  );
}

export default ViewTeachersCommunication;

