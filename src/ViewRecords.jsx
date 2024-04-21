import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Modals from "./components/Modals";
import { getChildrensAllByStatusTrueOnly, getHealthRecords } from "./api/teacher";

function ViewRecords() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const imageClassName = `w-12 h-12 rounded-full my-3`;
  const [isModalToggle,setIsModalToggle] = useState(false);
  const [modalData,setModelData] = useState({});
  const {id} = useParams()

  React.useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const response = await getHealthRecords(id)
      setData(response.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };



  return (
    <div className="">
      <div className="relative m-auto  shadow-md sm:rounded-lg mt-6 m-full md:w-[900px] overflow-x-scroll">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light text-surface dark:text-black uppercase">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Profile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-4">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="transition-all ease-in-out  border-b  bg-neutral-50  text-black hover:text-black  hover:bg-slate-200"
                        >
                          <td className="overflow-x-scroll max-w-44 whitespace-nowrap px-6 py-4">
                            {new Date(item.date).getDate() + ' / ' + new Date(item.date).getUTCMonth()+1  +" / " + new Date(item.date).getFullYear()  }
                          </td>
                          <td className="overflow-x-scroll max-w-44 whitespace-nowrap px-6 py-4">
                            {item.description}
                          </td>
                         
                          
                    
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

              
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ViewRecords;
