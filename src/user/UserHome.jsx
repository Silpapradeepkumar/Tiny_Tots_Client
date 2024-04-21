import React from 'react'
import BG_IMAGE from "../assets/pic/bg.jpg"

function UserHome() {
  return (
    <div className='grid lg:grid-cols-2'>
        <div className=" max-w-[440px] m-auto flex flex-col justify-center items-center">
            <div className="text-6xl font-black">
                <h1>Learn Anytime,</h1>
                <h1>Anywhere with</h1>
                <h1>Online Skills.</h1>
            </div>
            <div className="text-sm mt-3 text-slate-500 text-left">
                <p>Lorem ipsum dolor sit  elit. Libero, placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, placeat.</p>
            </div>
            <div className="me-auto mt-3">
                <button className=' px-10 py-4 shadow-2xl rounded-xl bg-blue-600 text-white font-semibold'>Joing Me</button>
            </div>
        </div>
        <div className="flex justify-center items-center h-[80vh]">
            <img loading="lazy" src={BG_IMAGE} alt="" className='w-[500px]' />
        </div>
    </div>
    
  )

}

export default UserHome