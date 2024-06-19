import React from 'react'
import cloud1 from '../images/Cloudsofa1.png'
import cloud2 from '../images/Cloudsofa2.png'

function Singleproduct4() {
  return (
    <div className=' min-h-[300px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 p-10'>
        <div className=" bg-[#F9F1E7]">
            <img src={cloud1} alt="" />
        </div>
        <div className=" bg-[#F9F1E7]">
            <img src={cloud2} alt="" />
        </div>
    </div>
  )
}

export default Singleproduct4