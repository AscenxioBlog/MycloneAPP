import React from 'react'

function Beforefooter() {
  return (
    <div>
        <div className="  min-h-[120px] w-full bg-[#fae1bf] flex place-items-center">
        <div className=" min-h-[70px] w-full  grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className=" min-h-[70px] flex place-items-center pl-[20px] ">
                <span className=' text-[35px]'><i class="fa-solid fa-trophy"></i></span>
                <div className=" ml-[10px]">
                    <h1 className=' font-extrabold text-[20px]'>High Quality</h1>
                    <p className=' font-[poppins] text-[gray]'>Crafted from top materials</p>
                </div>
            </div>


            <div className=" min-h-[70px]  flex place-items-center  pl-[20px]">
            <span className=' text-[35px]'><i class="fa-regular fa-circle-check"></i></span>
                <div className=" ml-[10px]">
                    <h1 className=' font-extrabold text-[20px]'>Warranty Protection</h1>
                    <p className=' font-[poppins] text-[gray]'>Over 2 years</p>
                </div>
            </div>


            <div className=" min-h-[70px] flex place-items-center  pl-[20px] ">
            <span className=' text-[35px]'><i class="fa-solid fa-truck-arrow-right"></i></span>
                <div className=" ml-[10px]">
                    <h1 className=' font-extrabold text-[20px]'>Free shipping</h1>
                    <p className=' font-[poppins] text-[gray]'>Order over 150 $</p>
                </div>
            </div>


            <div className=" min-h-[70px] flex place-items-center  pl-[20px] ">
            <span className=' text-[35px]'><i class="fa-solid fa-headset"></i></span>
                <div className=" ml-[10px]">
                    <h1 className=' font-extrabold text-[20px]'>24/7 support</h1>
                    <p className=' font-[poppins] text-[gray]'>Dedicated support</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Beforefooter