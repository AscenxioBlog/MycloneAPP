import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
// import Singleproduct from './Singleproduct'

function Shopcomponent2() {

    // var [show,Setshow]= useState("1")
    // var [hideme,Sethideme]= useState("none")

    // function hide() {
    //     Sethideme("none")
    //     Setshow("0")
        
    // }


  return (
    <div className="" style={{marginInline:'50px'}} >
      <div className=' min-h-[50vh] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[40px]'>


<div className="card1 mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden ">
    <div className="Hcompo31 bg-[] h-[320px]">
        <div className=" h-[40px] w-[40px] bg-[red] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-30%</div>
    </div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Syltherine</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span> &nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 3,500.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
       <Link to="/Singleproduct"> <div  className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F] flex justify-center place-items-center'>Add to Cart</div></Link>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo32 bg-[] h-[320px]"></div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Leviosa</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo33 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[red]  absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-50%</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Lolito</h1>
        <p className=' text-[silver] font-[poppins]'>Luxury Big Sofa</p>
        <div><span className=' font-bold font-[poppins]'>Rp 7,000.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>




<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo34 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[#00802fe5] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">New</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Respira</h1>
        <p className=' text-[silver] font-[poppins]'>Outdoor bar table and stool</p>
        <div><span className=' font-bold font-[poppins]'>Rp 5,00.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>



</div>


<div className=' min-h-[50vh] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px]'>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden ">
    <div className="Hcompo31 bg-[] h-[320px]">
        <div className=" h-[40px] w-[40px] bg-[red] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-30%</div>
    </div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Syltherine</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span> &nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 3,500.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo32 bg-[] h-[320px]"></div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Leviosa</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo33 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[red]  absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-50%</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Lolito</h1>
        <p className=' text-[silver] font-[poppins]'>Luxury Big Sofa</p>
        <div><span className=' font-bold font-[poppins]'>Rp 7,000.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>




<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo34 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[#00802fe5] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">New</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Respira</h1>
        <p className=' text-[silver] font-[poppins]'>Outdoor bar table and stool</p>
        <div><span className=' font-bold font-[poppins]'>Rp 5,00.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>



</div>



<div className=' min-h-[50vh] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px]'>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden ">
    <div className="Hcompo31 bg-[] h-[320px]">
        <div className=" h-[40px] w-[40px] bg-[red] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-30%</div>
    </div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Syltherine</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span> &nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 3,500.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo32 bg-[] h-[320px]"></div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Leviosa</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo33 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[red]  absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-50%</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Lolito</h1>
        <p className=' text-[silver] font-[poppins]'>Luxury Big Sofa</p>
        <div><span className=' font-bold font-[poppins]'>Rp 7,000.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>




<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo34 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[#00802fe5] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">New</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Respira</h1>
        <p className=' text-[silver] font-[poppins]'>Outdoor bar table and stool</p>
        <div><span className=' font-bold font-[poppins]'>Rp 5,00.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>



</div>



<div className=' min-h-[50vh] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px]'>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden ">
    <div className="Hcompo31 bg-[] h-[320px]">
        <div className=" h-[40px] w-[40px] bg-[red] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-30%</div>
    </div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Syltherine</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span> &nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 3,500.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className="card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo32 bg-[] h-[320px]"></div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Leviosa</h1>
        <p className=' text-[silver] font-[poppins]'>Stylish Cafe Chair</p>
        <div><span className=' font-bold font-[poppins]'>Rp2,500.000</span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>


<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo33 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[red]  absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">-50%</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Lolito</h1>
        <p className=' text-[silver] font-[poppins]'>Luxury Big Sofa</p>
        <div><span className=' font-bold font-[poppins]'>Rp 7,000.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>




<div className=" card1  mb-[40px] md:mb-0 lg:mb-0 min-h-[50vh] bg-[#F4F5F7] relative overflow-hidden">
<div className="Hcompo34 bg-[] h-[320px]">
<div className=" h-[40px] w-[40px] bg-[#00802fe5] absolute top-[20px] right-[30px] rounded-[50%] flex justify-center place-items-center text-[white] ">New</div>
</div>
    <div className=" bg-[#F4F5F7] h-[120px] mt-[5px] pl-[15px]">
        <h1 className=' text-[18px] font-bold font-[poppins]'>Respira</h1>
        <p className=' text-[silver] font-[poppins]'>Outdoor bar table and stool</p>
        <div><span className=' font-bold font-[poppins]'>Rp 5,00.000</span>&nbsp; &nbsp; <span className=' text-[silver]'><del>Rp 14,000.000</del></span></div>
    </div>
    <div className="subcard1 min-h-[445px] md:min-h-[510px] lg:min-h-[510px] w-full bg-[#656565b9] absolute bottom-[-510px] flex flex-col justify-center place-items-center">
        <button className=' h-[50px] w-[180px] bg-white font-[poppins] font-extrabold text-[#B88E2F]'>Add to Cart</button>
        <div className=" mt-[20px] text-white"><Link><i class="fa-solid fa-share-nodes"></i>Share</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <Link><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</Link>&nbsp; &nbsp;&nbsp; &nbsp;
        <button><i class="fa-regular fa-heart"></i>Like</button>
        </div>
    </div>
</div>



</div>

    <div className=" h-[100px] w-full flex justify-center place-items-center gap-3">
        <div className=" h-[40px] w-[200px] grid grid-cols-3 gap-4">
            <div className=" bg-[#B88E2F] text-white flex justify-center place-items-center rounded-[10px]">1</div>
            <div className=" bg-[#fae1bf] flex justify-center place-items-center rounded-[10px]">2</div>
            <div className=" bg-[#fae1bf] flex justify-center place-items-center rounded-[10px]">3</div>

        </div>
        <div className=" h-[40px] w-[70px] bg-[#fae1bf] flex justify-center place-items-center rounded-[10px]">Next</div>
    </div>

    {/* <Singleproduct viewme={hideme}/> */}
    </div>
  )
}

export default Shopcomponent2