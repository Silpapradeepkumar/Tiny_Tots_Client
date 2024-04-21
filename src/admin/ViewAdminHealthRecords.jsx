import React, { useState } from "react";
import { getHealthRecords } from "../api/teacher";
import Spinner from "../spinner";
import { Link, useParams } from "react-router-dom";

function ViewAdminHealthRecords() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const {id,name} = useParams()

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getHealthRecords(id);
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const goToDashBoard = `/admin/health-records`;
  const goToParent = `/admin/view-health-records/${id}/${name}`;
  const breadCrubmberClassName = "hover:text-slate-500 hover:underline";
  const breadCrumbContainer = "flex gap-2 text-[14px] my-3";


  return (
    <>
      {loading && (
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <>
          <ul className={breadCrumbContainer}>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToDashBoard}>Main</Link> <span> / </span>
        </li>
        <li className={`${breadCrubmberClassName}`}>
          <Link to={goToParent}>{name}</Link>
        </li>
      </ul>
        {
            data && data.map(({_id,description:message,doctorsInfo})=>{
                return(
                    <div key={_id} className="max-h-[500px] overflow-auto">
                    <div className="px-3 border shadow-md py-5 my-3">
                      <p>Dr.{doctorsInfo.length > 0 && doctorsInfo[0].name}</p>
                      <p>Date : 12 / 02 / 20233</p>
                      <p className="max-h-[400px] overflow-auto pt-5">
                        {message}
                      </p>
                    </div>
                  </div>
                )
            })
        }
         
        </>
      )}
    </>
  );
}

export default ViewAdminHealthRecords;
