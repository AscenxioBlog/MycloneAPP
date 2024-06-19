import React from 'react'
import Logoos from '../images/Logos-05.png'
import cartpics from '../images/cartpics.png'
import { Link } from 'react-router-dom'
import Beforefooter from './Beforefooter'

function MainCart() {
  return (
    <div className=' h-full w-full'>
        <div className="compare min-h-[300px] w-full flex justify-center place-items-center">
        <div className=" h-[200px] w-[300px] bg-[] flex flex-col place-items-center justify-center">
            <img src={Logoos} alt="" />
            <p className=' text-[30px] font-extrabold font-[poppins]'>Cart</p>
            <div className=" font-[poppins]"><span className=' font-extrabold font-[poppins]'>Home <i class="fa-solid fa-chevron-right"></i></span> &nbsp;<span>Cart</span></div>
        </div>
    </div>

    <div className=" lg:min-h-[300px] w-[100%] mt-8 mb-[40px]  grid grid-cols-1 md:grid-cols-[70%,30%]  lg:grid-cols-[70%,30%] lg:pl-[50px] lg:pr-[50px] gap-5">
        <div className="  w-full">
            <table className=' w-[100%]'  style={{border:'1px solid gray'}}>
                <thead  style={{border:'1px solid gray'}} >
                    <tr className=' h-[40px]  bg-[#F9F1E7]  ' style={{borderRadius:'50px'}}>
                        <th width='20%' bgcolor=''>Product</th>
                        <th width='20%' bgcolor=''>Price</th>
                        <th width='20%' bgcolor=''>Quantity</th>
                        <th width='20%' bgcolor=''>Subtotal</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody >
                    <tr >
                        <td className=' lg:flex lg:place-items-center lg:justify-center text-center  text-[gray]'><img src={cartpics} alt="" /> <span>Asgaard Sofa</span></td>
                        <td width='20%' bgcolor='' className=' text-center'>Rs. 250,000.000</td>
                        <td width='20%' bgcolor='' className=' lg:pl-14'><div className=" h-[30px] w-[30px] text-center " style={{border:'1px solid gray'}}>1</div></td>
                        <td width='20%' bgcolor='' className=' text-center'>Rs. 250,000.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="  bg-[#F9F1E7]">
            <div className=" h-[50px] w-full  text-[25px] font-bold flex justify-center place-items-center">Cart Totals</div>
            <div className=" h-[70px] w-full  flex justify-around place-items-end text-[20px]">Subtotal <span className=' text-[gray] '>Rs. 250,000.000</span></div>
            <div className=" h-[70px] w-full flex justify-around place-items-end text-[20px] ">Total <span className=' text-[gold]'>Rs. 250,000.000</span></div>
            <div className=" h-[70px] w-full  flex justify-around place-items-end text-[18px] ">
                <section className=' h-[40px] w-[100px] text-center  rounded-[10px] flex place-items-center justify-center' style={{border:'2px solid gray'}}><Link to='/Checkoutcomponent'>Check Out</Link></section>
            </div>
        </div>
    </div>
<Beforefooter/>

    </div>
  )
}

export default MainCart