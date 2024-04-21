import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getConsultationSchedule } from "../api/admin";

function GetHealthRecorByConsultingId() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getConsultationSchedule(id);
      setData(response.result[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getDay = new Date(data?.date).getDate();
  const getYear = new Date(data?.date).getFullYear();
  const getMonth = new Date(data?.date).getUTCMonth() + 1;

  return (
    <div className="mt-5 ms-3">
     { data?.doctorInfo?.length > 0 && <div className="">
        <p className="px-4 w-fit border py-2">Date : {getDay + "/" + getMonth + "/" + getYear}</p>
        <p className="px-3 py-2 my-3">Dr.{data?.doctorInfo[0]?.name}</p>

        <p className="bg-lime-50 px-3 py-5">{data?.description}</p>
      </div>}
    </div>
  );
}

export default GetHealthRecorByConsultingId;
