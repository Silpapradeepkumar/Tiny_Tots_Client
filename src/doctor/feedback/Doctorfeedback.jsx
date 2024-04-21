import React, { useState } from "react";
import { getFeedback } from "../../api/admin";
import Spinner from "../../spinner";

function Doctorfeedback() {
  const paragrapClassName = `my-1 shadow-md px-4 py-3 rounded-md text-slate-700 text-[15px]`;
  const titleClassName = `text-slate-900 text-[18px]`;
  const mainDivClassName = `mx-3 my-5 max-h-[530px] overflow-auto`;
  const FlexCenterStyleClassName = `flex w-full h-screen justify-center items-center`

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getFeedback();
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
     { loading ? <div className={FlexCenterStyleClassName}>
     <div className=" w-full flex justify-center h-96 items-center">
          <Spinner />
        </div>
     </div> : <div className={mainDivClassName}>
        <h1 className={titleClassName}>Feedbacks</h1>


        {data.length > 0 &&
          data.map(({ description: message ,_id}) => {
            return (
              <p className={paragrapClassName} key={_id}>
                {message}
              </p>
            );
          })}

        {/* {data.length === 0 && (
          <div className={FlexCenterStyleClassName}>
            <p>No recoreds!</p>
          </div>
        )} */}
      </div>}
    </>
  );
}

export default Doctorfeedback;
