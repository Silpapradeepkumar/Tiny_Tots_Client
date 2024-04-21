import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getSchedulesByChildrenId,
  getViewAllActivitiesByChildId,
} from "../api/admin";
import Spinner from "../spinner";

function ViewDoctorConsultationOfDoctor() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getSchedulesByChildrenId(id);
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-4 py-10">
      {loading ? (
        <Spinner />
      ) : (
        <>
        <div className="overflow-auto max-h-[500px]">

          {data &&
            data.map((item) => {
              return (
                <div className="flex gap-7" key={item._id}>
                  <p className="border flex-1 py-3 px-3 my-2 rounded">
                    Date : {item.message}
                  <Link to={`/doctors/gethealthrecords/${item._id}`}>
                    <p className=" w-fit text-white bg-slate-600 border py-3 px-3 my-2 rounded">view</p>
                  </Link>
                  </p>
                </div>
              );
            })}
        </div>

        </>
      )}
    </div>
  );
}

export default ViewDoctorConsultationOfDoctor;
