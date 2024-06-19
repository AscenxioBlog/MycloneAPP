import React from 'react'
import vector from '../images/Vector.jpg'
import vector2 from '../images/vector2.png'
import vector3 from '../images/Group57.png'



function Shopcomponent1() {
  return (
    <div className="">
        <div className="Scompo1 h-[300px] w-full flex justify-center place-items-center">
        <div className=" h-[100px] w-[150px] flex flex-col place-items-center justify-center">
            <h1 className=' text-[30px] font-extrabold font-[poppins]'>Shop</h1>
            <div className=" font-[poppins]"><span className=' font-extrabold font-[poppins]'>Home <i class="fa-solid fa-chevron-right"></i></span> &nbsp;<span>Shop</span></div>
        </div>
    </div>
    <div className=" h-[100px] w-full flex justify-between place-items-center pl-[20px] pr-[20px] bg-[#fae1bf]">
        <div className=" h-[60px] w-[40%]  font-[poppins] flex place-items-center">
           <div className="sborder h-[25px] w-[200px]  flex justify-center place-items-center">
           <span><img src={vector3} alt="" /></span> &nbsp;&nbsp;&nbsp;&nbsp;
           <span><img src={vector} alt="" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
           <span><img src={vector2} alt="" /></span>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className=' font-[poppins]'>Showing 1-16 of 32 results</span>
        </div>

        <div className=" h-[60px] w-[40%] flex place-items-center justify-center">
            <span>Show </span>&nbsp;&nbsp;&nbsp;<div className="Showinput h-[40px] w-[40px] bg-white text-[silver] flex justify-center place-items-center"><input type="text" name="" id="" value={16} readOnly /></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Short by</span>&nbsp;&nbsp;&nbsp;<div className="Shortby h-[40px] w-[70px] bg-white text-[silver] flex justify-center place-items-center">
                <select name="" id="">
                    <option value="">Default</option>
                    <option value="">Description</option>
                    <option value="">Color</option>
                    <option value="">Price</option>
                </select>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Shopcomponent1