import React from "react";
import Spinner from "../spinner";
import { getChildrenById } from "../api/admin";
import { Link, useParams } from "react-router-dom";

function TeachChildrenDetailedView() {
  const className = `rounded-md border appearance-none px-4 py-3 outline-none bg-slate-50 shadow-md text-sm`;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});
  const imageClassName = `className='w-12 h-12 rounded-full my-3'`;
  const { id } = useParams();

  React.useEffect(() => {
    fetchAPI(id);
  }, [id]);

  const fetchAPI = async (childrenId) => {
    try {
      setLoading(true);
      const response = await getChildrenById(childrenId);
      setData(response.result[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData({});
    }
  };

  return (
    <div className="me-4 mt-10 w-full ">
      {loading && (
        <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
      )}

      {!loading && (
        <>
        {
            data?.parentInfo &&
       
          <>
          <Link to={-1}>Back</Link>
          <h1 className="text-2xl py-2 ms-2 underline">
            Details of {data.name},
          </h1>
          <div className="w-full bg-slate-50 grid grid-cols-2 gap-3 ">
            <p className={className}>
              Name : <span>{data.name}</span>
            </p>
            <p className={className}>
              Email : <span>{data.email}</span>
            </p>
            <p className={className}>
              Age : <span>{data.age}</span>
            </p>
            <p className={className}>
              Mobile Number : <span>{data.number}</span>
            </p>
            <p className={className}>
              Gender : <span>{data.gender}</span>
            </p>
            <p className={className}>
              Standard : <span>{data.standard}</span>
            </p>
            <p className={className}>
              Parent Name : <span>{data.parentInfo.name}</span>
            </p>
            <div className="flex gap-3 items-center px-3">
              <img
                src={data.image}
                alt={"preview"}
                loading="lazy"
                className={imageClassName}
              />
            </div>
            <p className={className}>
              House Name : <span>{data.housename}</span>
            </p>
            <p className={className}>
              Place : <span>{data.place}</span>
            </p>
            <p className={className}>
              City : <span>{data.city}</span>
            </p>
            <p className={className}>
              State : <span>{data.state}</span>
            </p>
            <p className={className}>
              Qualification : <span>{data.qualification}</span>
            </p>
          </div> 
          </>
          }
        </>
      )}
    </div>
  );
}

export default TeachChildrenDetailedView;
