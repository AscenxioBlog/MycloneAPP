import React from 'react'

function Singleproduct1() {
  return (
    <div className=' h-[100px] bg-[#fae1bf] flex gap-4 place-items-center pl-[40px]'>
        <div className=" h-[40px] w-[100px] flex justify-center place-items-center"><span className=' text-[gray]'>Home</span> &nbsp; &nbsp;<i class="fa-solid fa-chevron-right"></i></div>
        <div className=" h-[40px] w-[100px] flex justify-center place-items-center " style={{borderRight:"2px solid gray"}}> <span className=' text-[gray]'>Shop</span> &nbsp;&nbsp; <i class="fa-solid fa-chevron-right"></i></div>
        <div className=" h-[40px] w-[100px] flex justify-center place-items-center">Asgaard sofa</div>
    </div>
  )
}

export default Singleproduct1