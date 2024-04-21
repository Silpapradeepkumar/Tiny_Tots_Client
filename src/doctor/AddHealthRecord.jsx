import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addDoctorDescription, updateDoctorByIdAdmin } from '../api/admin';
import { errorToast, successToast } from '../toast';

function AddHealthRecord() {

    const [description,setDescription]=  useState('')

    const className = `rounded-md border appearance-none px-4 py-3 outline-none bg-slate-50 shadow-md text-sm`
    const navigate = useNavigate();
    const {id,selfid} = useParams();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const data = {
               description,
               childId:id,
             date:new Date(),
             consultantId:selfid,
                doctorId:JSON.parse(localStorage.getItem("doctor-details"))?._id
            }
            console.log(data,'data');
            // addHealthRecord
            const response = await addDoctorDescription(data)
             successToast(response?.message || 'Successfully Updated')
             navigate('/doctors/health-records')
        } catch (error) {
            errorToast(error.response.data.message || error.message || 'something went wrong!')
        }
    }

  return (
    <form className='mt-8' onSubmit={handleSubmit}>
        <h1 className='text-xl ms-0 mb-4'>Form</h1>
        <div className="grid grid-cols-2 gap-1 w-[800px] ">
            <textarea className={className}  value={description} onChange={(e)=>setDescription(e.target.value)} name="" id="" cols="30" rows="10">

            </textarea>
        </div>
        <button type='submit' className=' w-fit px-10 py-2 mt-2 rounded-md bg-green-500 text-white tex-sm font-medium'>Submit</button>
        <button onClick={()=>navigate('/doctors/health-records')} type='button' className=' w-fit px-10 py-2 mt-2 rounded-md bg-gray-300 ms-2 text-black tex-sm font-medium'>Back</button>
        
    </form>
  )
}

export default AddHealthRecord