import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../spinner'
import { getAdminById } from '../../api/admin'



function Profile() {

    const className = `rounded-md border appearance-none px-4 py-3 outline-none bg-slate-50 shadow-md text-sm`
    const [loading,setLoading] = React.useState(false)
    const [data,setData] = React.useState({})
    const imageClassName = `w-12 h-12 rounded-full my-3 object-cover`

    useEffect(()=>{
        fetchAPI()
    },[])

    const fetchAPI = async()=>{
        try {
            setLoading(true);
            const response = await getAdminById(JSON.parse(localStorage.getItem("admin-details"))._id)
            setData(response.result);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setData({});
        }

    }

  return (
    <div className="me-4 mt-10 w-full ">
        { loading && <div className=" w-full flex justify-center h-96 items-center">
            <Spinner/>
        </div>}

        { 
        !loading && 
        <>
        <h1 className='text-2xl py-2 ms-2 underline'>Profile</h1>
        <div className='w-full bg-slate-50 grid grid-cols-2 gap-3 ' >
            <p className={className}>Name : <span>{data.name}</span></p>
            <p className={className}>Email : <span>{data.email}</span></p>
            <p className={className}>Age : <span>{data.age}</span></p>
            <p className={className}>Mobile Number  :  <span>{data.number}</span></p>
            <p className={className}>Gender  : <span>{data.gender}</span></p>
        <div className="flex gap-3 items-center px-3">
                <img src={data.image} alt={'preview'} loading='lazy' className={imageClassName} />
            </div>
        <p className={className}>House Name  : <span>{data.housename}</span></p>
        <p className={className}>Place  : <span>{data.place}</span></p>
        <p className={className}>City  : <span>{data.city}</span></p>
        <p className={className}>State  : <span>{data.state}</span></p>
        <p className={className}>Qualification  :  <span>{data.qualification}</span></p>
    </div>
    <div className="">
        <Link to={`/admin/admin-edit-profile`}>
            {/* <p className='hover:underline px-8 py-2 text-sm shadow-md mt-4 w-fit rounded-md text-black'>Edit</p> */}
            <button type='button' className=' w-fit px-10 py-2 mt-2 rounded-md bg-green-500 text-white tex-sm font-medium'>Edit</button>

        </Link>
    </div>
    </>

    }
    </div>
  )
}

export default Profile