import { Link } from "react-router-dom";

function Doctorcommunication() {
  return (
    <div className="my-5 flex flex-row justify-start gap-1  text-white ">
      <Link to={'/doctors/manage-admin-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400 border  ">
          Admin
        </button>
      </Link>
      <Link to={'/doctors/manage-parents-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Parents
        </button>
      </Link>
      <Link to={'/doctors/manage-teachers-communication'}>
        <button className="bg-green-500 rounded-lg w-32 px-4 py-2 hover:bg-green-400">
          Teachers
        </button>
      </Link>
    </div>
  );
}

export default Doctorcommunication;

