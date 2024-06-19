import React from 'react'
import { Link } from 'react-router-dom'
import comparesofa1 from '../images/comparesofa1.png'
import comparestar from '../images/comparestar.png'
import Beforefooter from '../ReUsablecomponent/Beforefooter'

function Comparecomponent2() {
  return (
    <div className=" mt-5 ">
   <div className="min-h-[250vh] mb-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-[50px] pr-[50px] gap-2">
    <div className=" bg-[]" style={{borderRight:'1px solid gray'}}>
    <div className=" min-h-[320px]   pt-4 pl-[50px]" style={{lineHeight:'35px',borderBottom:'1px solid gray'}}>
        
        <p className=' text-[32px] '>Go to product</p>
        <p className=' text-[32px] '>page for more </p>
        <p className=' text-[32px] ' >products</p>
        <p className=' mt-3' style={{textDecoration:'underline'}}><Link>View More</Link></p>
    </div>
    <div className="">
       <ol style={{lineHeight:'35px'}}>
        <li className=' font-bold'>General</li>
        <li>Sales Package</li>
        <li>Model Number</li>
        <li>Secondary Material</li>
        <li>Configuration</li>
        <li>Upholstery Material</li>
        <li>Upholstery Color</li>
       </ol>
    </div>
    <div className=" h-[]  mt-5">
       <ol className='' style={{lineHeight:'35px'}}>
        <li className=' font-bold'>Product</li>
        <li>Filling Material</li>
        <li>Finsh Type</li>
        <li>Adjustable Headrest</li>
        <li>Maximum Loadd Capacity</li>
        <li>Origin Of Manufacture</li>
        
       </ol>
    </div>

    <div className=" h-[]  mt-5 ">
       <ol className='' style={{lineHeight:'35px'}}>
        <li className=' font-bold'>Dimensions</li>
        <li>Width</li>
        <li>Height</li>
        <li>Depth</li>
        <li>Weight</li>
        <li>Seat Height</li>
        <li>Leg Height</li>
        
       </ol>
    </div>

    
    <div className=" h-[]  mt-5 ">
       <ol className='' style={{lineHeight:'47px'}}>
        <li className=' font-bold'>Warranty</li>
        <li>Warranty Summary</li>
        <li>Warranty Service Type</li>
        <li>Covered Warranty</li>
        <li>Not Covered In Warranty</li>
        <li>Domestic Warranty</li>
        
        
       </ol>
    </div>
 
    </div>



    <div className=" bg-[]" style={{borderRight:'1px solid gray'}}>
    <div className="  min-h-[320px] " style={{borderBottom:'1px solid gray'}}>
        <div className=" h-[200px] bg-[#F9F1E7] rounded-[20px] flex place-items-center"> <img src={comparesofa1} alt=""  width='100%' height='100%' /></div>
            <div className="">
                <p className=' text-[19px] font-bold'>Asgaard Sofa</p>
                <p className=' font-bold'>Rs. 250,000.000</p>
                <div className=" flex">
                <p className=' font-bold'>4.7</p>
                <img src={comparestar} alt="" />
                <section className=' w-[100px] pl-2 text-[gray]' style={{borderLeft:'1px solid gray'}}>204 Review</section>
                </div>
            </div>
        </div>

        <div className=" h-[]  ">
       <ol className=' pt-[30px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>1 Sectional Sofa</li>
        <li>TFCBLIGBL6SRHS</li>
        <li>Solid Wood</li>
        <li>L-Shape</li>
        <li>Fabric + Cotton</li>
        <li>Bright Grey & Lion</li>
       </ol>
    </div>

    <div className=" h-[]  mt-5 ">
       <ol className=' pt-[35px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>Foam</li>
        <li>Bright Grey & Lion</li>
        <li>No</li>
        <li>280 KG</li>
        <li> India</li>
        
       </ol>
    </div>


    <div className=" h-[]  mt-5">
       <ol className=' pt-[35px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>265.32 cm</li>
        <li>76 cm</li>
        <li>167.76 cm</li>
        <li>45 KG</li>
        <li> 41.52 cm</li>
        <li> 5.46 cm</li>
        
       </ol>
    </div>

    <div className=" h-[]  mt-5">
       <ol className=' pt-[35px]' style={{lineHeight:'50px'}}>
        <li className=' font-bold'></li>
        <li>1 year Manufacturing Warranty</li>
        <li style={{lineHeight:'15px'}}>For Warranty Claim or Any Product Related Issues Please Email At Product@travifurniture.com</li>
        <li>Warranty Against Manuacturing Defeat</li>
        <li  style={{lineHeight:'15px'}}>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural CourseOf The Product Usage</li>
        <li> 1 Year</li>
        <li> <Link to='/MainCart' className=' h-[40px] w-[100px] bg-[#B88E2F] flex justify-center place-items-center text-[white]'>Add To Cart</Link></li>
        
       </ol>
    </div>
    </div>
    <div className=" bg-[]" style={{borderRight:'1px solid gray'}}>
    <div className="  min-h-[320px] " style={{borderBottom:'1px solid gray'}}>
        <div className=" h-[200px] bg-[#F9F1E7] rounded-[20px] flex place-items-center"> <img src={comparesofa1} alt=""  width='100%' height='100%' /></div>
            <div className="">
                <p className=' text-[19px] font-bold'>Asgaard Sofa</p>
                <p className=' font-bold'>Rs. 250,000.000</p>
                <div className=" flex">
                <p className=' font-bold'>4.2</p>
                <img src={comparestar} alt="" />
                <section className=' w-[100px] pl-2 text-[gray]' style={{borderLeft:'1px solid gray'}}>145 Review</section>
                </div>
            </div>
        </div>

        <div className=" h-[] ">
       <ol className=' pt-[30px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>1 Three Seater, 2 Single Seater</li>
        <li>DTUBLIGRBL568</li>
        <li>Solid Wood</li>
        <li>L-Shape</li>
        <li>Fabric + Cotton</li>
        <li>Bright Grey & Lion</li>
       </ol>
    </div>

    <div className=" h-[]  mt-5">
       <ol className=' pt-[35px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>Foam</li>
        <li>Bright Grey & Lion</li>
        <li>No</li>
        <li>300 KG</li>
        <li> India</li>
        
       </ol>
    </div>

    <div className=" h-[]  mt-5">
       <ol className=' pt-[35px]' style={{lineHeight:'35px'}}>
        <li className=' font-bold'></li>
        <li>265.32 cm</li>
        <li>76 cm</li>
        <li>167.76 cm</li>
        <li>65 KG</li>
        <li> 41.52 cm</li>
        <li> 5.46 cm</li>
        
       </ol>
    </div>

    <div className=" h-[]  mt-5">
       <ol className=' pt-[35px]' style={{lineHeight:'50px'}}>
        <li className=' font-bold'></li>
        <li>1.2 year Manufacturing Warranty</li>
        <li style={{lineHeight:'15px'}}>For Warranty Claim or Any Product Related Issues Please Email At Support@xyz.com</li>
        <li style={{lineHeight:'15px', marginTop:'28px'}}>Warranty Of The Product Is Limited To Manufacturing Defects Alone</li>
        <li  style={{lineHeight:'15px', marginTop:'13px'}}>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural CourseOf The Product Usage</li>
        <li> 3 Months</li>
        <li> <Link to='/MainCart' className=' h-[40px] w-[100px] bg-[#B88E2F] flex justify-center place-items-center text-[white]'>Add To Cart</Link></li>
        
       </ol>
    </div>
    </div>
    <div className=" bg-[]">
    <div className="  min-h-[320px]  flex flex-col place-items-center pt-[40px]" style={{borderBottom:'1px solid gray'}}>
            <p className=' text-[25px] font-bold '>Add A Product</p>
            <select className=' bg-[#B88E2F] h-[30px] w-[180px] text-[white] rounded-[10px]' name="" id="">
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
                <option value="">Choose a product</option>
            </select>
        </div>
    </div>
   </div>
<Beforefooter/>
   </div>
  )
}

export default Comparecomponent2