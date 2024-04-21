import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import { getTeacherById, updateTeacherById, updateTeacherByIdTeacher } from '../api/admin';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { errorToast, successToast } from '../toast';
function TeacherEditProfile() {

    const [name,setName]=  useState('')
    const [email,setEmail]=  useState('')
    const [password,setPassword]=  useState('')
    const [age,setAge]=  useState('')
    const [number,setNumber]=  useState('')
    const [image,setImage]=  useState('')
    const [housename,setHousename]=  useState('')
    const [place,setPlace]=  useState('')
    const [city,setCity]=  useState('')
    const [state,setState]=  useState('')
    const [qualification,setQualification]=  useState('')
    const [gender,setGender]=  useState('')
    const className = `rounded-md border appearance-none px-4 py-3 outline-none bg-slate-50 shadow-md text-sm`
    const imageClassName = `w-12 h-12 rounded-full my-3`
    const navigate = useNavigate();
    const [ifscCode,setIfscCode]=  useState('')
    const [accountNumber,setAccountNumber]=  useState('')
    const [branch,setBranch]=  useState('')
    const [bankId,setBankId]=  useState('')

    const {id} = useParams();

    const [loading,setLoading] = useState(false)



    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const data = {
                name,
                email,
                password,
                age,
                number,
                image,
                housename,
                place,
                city,
                state,
                qualification,
                gender,branch,
                IFSCCode:ifscCode,
                accountNumber,
                bankId,
            }
        
            const response = await updateTeacherByIdTeacher(data,JSON.parse(localStorage.getItem("teacher-details"))._id)
             successToast(response?.message || 'Successfully Edited')
             localStorage.setItem("teacher-details",JSON.stringify(response?.result))
             navigate('/teacher/teacher-profile')
             
        } catch (error) {
            errorToast(error.response.data.message || error.message || 'something went wrong!')
        }
    }


    useEffect(()=>{
        fetchAPI()
    },[])

    const fetchAPI = async()=>{
        try {
            setLoading(true);
            const response = await getTeacherById(JSON.parse(localStorage.getItem("teacher-details"))._id)
            setName(response.result.name),
            setEmail(response.result.email),
            setPassword(response.result.password),
            setAge(response.result.age),
            setNumber(response.result.number),
            setImage(response.result.image),
            setHousename(response.result.housename),
            setPlace(response.result.place),
            setCity(response.result.city),
            setState(response.result.state),
            setQualification(response.result.qualification), 
            setIfscCode(response.result.Bankinfo[0]?.IFSCCode)
            setAccountNumber(response.result.Bankinfo[0]?.accountNumber)
            setBranch(response.result.Bankinfo[0]?.branch)
            setBankId(response.result.Bankinfo[0]?._id)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }

    }
  return (
    <form className='mt-8' onSubmit={handleSubmit}>
        <h1 className='text-xl ms-0 mb-4'>Edit Profile</h1>
        <div className="grid grid-cols-2 gap-1 w-[800px] ">
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className={className}  />
            <input type="email" placeholder='Email-ID' value={email} onChange={(e)=>setEmail(e.target.value)} className={className}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className={className}/>
            <input type="number" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} className={className}/>
            <input type="number" placeholder='Number' value={number} onChange={(e)=>setNumber(e.target.value)} className={className}/>
            <div className="flex gap-3 items-center px-3">
                <FileBase64 onDone={ (e)=>setImage(e?.base64) } />
                <img src={image} alt={'preview'} loading='lazy' className={imageClassName} />
            </div>
            <input type="text" placeholder='HouseName' value={housename} onChange={(e)=>setHousename(e.target.value)} className={className}/>
            <input type="text" placeholder='Place' value={place} onChange={(e)=>setPlace(e.target.value)} className={className}/>
            <input type="text" placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} className={className}/>
            <div className={className}>
                <select name=""  className='appearance-none outline-none' onChange={(e)=>setState(e.target.value)} id="">
                    <option  value="kerala">Kerala</option>
                    <option  value="karnataka">Karnataka</option>
                    <option  value="goa">Goa</option>
                </select>
            {/* <input type="text" placeholder='State' value={state} onChange={(e)=>setState(e.target.value)} className={className}/> */}
            </div>
            <input type="text" placeholder='Qualification' value={qualification} onChange={(e)=>setQualification(e.target.value)} className={className}/>

            <div className="flex items-center justify-start">
                <label htmlFor="" className='text-sm ms-3'>Male</label>
                <input type="radio"  name='gender'className='ms-2' value={'male'} checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)} />

                <label htmlFor="" className='text-sm ms-3'>Female</label>
                <input type="radio" name='gender'className='ms-2' value={'female'} checked={gender === 'female'} onChange={(e)=>setGender(e.target.value)} />

                <label htmlFor="" className='text-sm ms-3'>Others</label>
                <input type="radio" name='gender'className='ms-2'  value={'others'} checked={gender === 'others'} onChange={(e)=>setGender(e.target.value)} />

            </div>

            <input type="number" placeholder='Account Number' value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)} className={className}/>
            <input type="text" placeholder='Branch' value={branch} onChange={(e)=>setBranch(e.target.value)} className={className}/>
            <input type="text" placeholder='IFSC Code' value={ifscCode} onChange={(e)=>setIfscCode(e.target.value)} className={className}/>
        </div>
        <button type='submit' className=' w-fit px-10 py-2 mt-2 rounded-md bg-green-500 text-white tex-sm font-medium'>Submit</button>
        <button onClick={()=>navigate(-1)} type='button' className=' w-fit px-10 py-2 mt-2 rounded-md bg-gray-300 ms-2 text-black tex-sm font-medium'>Back</button>
        
    </form>
  )
}

export default TeacherEditProfile