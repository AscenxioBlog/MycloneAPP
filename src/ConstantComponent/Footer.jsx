import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'


function Footer() {
  return (
    <div className=' footer min-h-[330px] flex justify-center mb-[50px] '>
        <div className=" subdiv min-h-[300px] w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className=" flex flex-col  pl-[30px] space-y-4 pt-[50px]">
                    <h1 className=' text-[25px] font-bold'>Furniro</h1>
                    <p>400 Uniersity Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
                </div>


                <div className=" flex flex-col  space-y-4 pt-[50px] pl-[30px]">
                <h1 className=' text-[18px] text-[gray]  '> Links</h1>
                    <ol className=' text-[17px] space-y-4'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/About">About</Link></li>
                        
                        <li><Link to="/Contact">Contact</Link></li>
                    </ol>
                </div>


                <div className="  flex flex-col  space-y-4 pt-[50px] pl-[30px]">
                <h1 className='text-[18px] text-[gray] '>Help</h1>
                    <ol className=' text-[17px] space-y-4'>
                        <li><Link>Payment option</Link></li>
                        <li><Link>Retuns</Link></li>
                        <li><Link>Privacy policies</Link></li>
                    </ol>
                </div>


                <div className="  flex flex-col  space-y-4 pt-[50px]  pl-[30px]">
                <h1 className=' text-[18px] text-[gray] '>Newsletter</h1>
                   <span className=' Newsletter'><input type="text" placeholder='Enter Your Email Address' />
                   <button className=''>SUBSCRIBE</button></span>
                </div>
            </div>
    </div>
  )
}

export default Footer