import React from 'react'
import Logoos from '../images/Logos-05.png'

function Comparecomponent1() {
  return (
    
    <div className="">
        <div className="compare h-[300px] w-full flex justify-center place-items-center">
        <div className=" h-[200px] w-[300px] bg-[] flex flex-col place-items-center justify-center">
            <img src={Logoos} alt="" />
            <p className=' text-[30px] font-extrabold font-[poppins]'>Product comparison</p>
            <div className=" font-[poppins]"><span className=' font-extrabold font-[poppins]'>Home <i class="fa-solid fa-chevron-right"></i></span> &nbsp;<span>Comparison</span></div>
        </div>
    </div>


    </div>
  )
}

export default Comparecomponent1