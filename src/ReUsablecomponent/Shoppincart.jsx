import React, { useState } from 'react'
import cartbtn from '../images/Group.png'
import shoping1 from '../images/shoping1.png'
import shoping2 from '../images/shoping2.png'
import sofa from '../images/sofaset1.png'
import { Link } from 'react-router-dom'
// import ComparisonComponent from '../ComparisonComponent/ComparisonComponent'

function Shoppincart(props) {
    var [showcompare,setcompare]=useState('none')

    function displaycompare() {
        setcompare('block')
    }
  return (
   <div className=" bg-[] min-h-[450vh] w-full absolute right-0" style={{ display:props.mydisplay, transition:'1s'}}>
     <div className=" h-[450vh] w-full bg-[#5857578a] opacity-[] flex justify-end absolute top-0" style={{zIndex:'10',}}>
             <div className=' h-[500px] w-[400px] bg-[white]   flex flex-col justify-between'>
     <div className="">
     <div className=" h-[80px] w-full  flex justify-between place-items-center pr-[20px]">
            <h1 className=' h-[50px] w-[70%] ml-[20px] text-[25px]' style={{borderBottom:'1px solid gray'}}>Shopping cart</h1> <span> <button onClick={props.show}><img src={cartbtn} alt="" /> </button></span>
        </div>
        <div className=" h-[80px] w-full bg-[] flex gap-2 pl-[20px]">
            <div className=" h-[80px] w-[30%]  rounded-[10px]"><img src={shoping1} alt="" /></div>
            <div className=" h-[80px] w-[50%]  flex justify-center place-items-center flex-col">
                <h1 className=' text-[19px]'>Asgaard Sofa</h1>
                <p>1 &nbsp; X &nbsp; <span className=' text-[gold]'>Rs 250,000.000</span></p>
            </div>
            <div className=" h-[80px] w-[20%]  flex justify-center place-items-center">
            <span className=' h-[30px] w-[30px] bg-[gray] text-[white] rounded-[50%] flex justify-center place-items-center text-[20px]'><i class="fa-solid fa-xmark"></i></span>
            </div>

        </div>
    <div className=" h-[80px] w-full bg-[] mt-3 flex gap-2 pl-[20px]">
            <div className=" h-[80px] w-[30%]  rounded-[10px] overflow-hidden"><img src={shoping2}  alt="" style={{width:'100%', height:'100%'}} /></div>
            <div className=" h-[80px] w-[50%]  flex justify-center place-items-center flex-col">
            <h1 className=' text-[19px]'>Casaliving wood</h1>
            <p>1 &nbsp; X &nbsp; <span  className=' text-[gold]'>Rs 270,000.000</span></p>
            </div>
            <div className=" h-[80px] w-[20%] flex justify-center place-items-center">
            <span className=' h-[30px] w-[30px] bg-[gray] text-white rounded-[50%] flex justify-center place-items-center text-[20px]'><i class="fa-solid fa-xmark"></i></span>

            </div>

        </div>
     </div>

       <div className="">
       <div className=" flex justify-between pl-[20px] pr-[20px]">
            <h1>Subtotal</h1>
            <span className=' text-[gold]'>Rs 520,000.000</span>
        </div>
        <div className=" h-[80px] w-full  flex gap-2 place-items-center justify-center mt-5" style={{borderTop:'1px solid gray'}}>
            <button className=' h-[30px] w-[100px] bg-[] rounded-[50px]' style={{border:'1px solid black'}}>Cart</button>
            <button className=' h-[30px] w-[120px] bg-[] rounded-[50px]' style={{border:'1px solid black'}}>Checkout</button>
            <Link to='/ComparisonComponent' className=' h-[30px] w-[140px] bg-[] rounded-[50px] text-center' style={{border:'1px solid black'}} >Comparison</Link>
        </div>
       </div>
    </div>
    </div>
    {/* <div className=" h-[400px] bg-[images/sofaset1.png] w-[500px]"></div> */}
    {/* <ComparisonComponent compareDisplay={showcompare} /> */}
   </div>
   
  )
}

export default Shoppincart