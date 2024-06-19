import React from 'react'
import { Link } from 'react-router-dom'

function Subnavcomponent(props) {
  return (
    <div className=' h-[200px] w-[100px]  absolute top-[100px] right-[30px]' style={{display:props.showsubnav, zIndex:'10'}}>
        
        <ol className=' md:hidden lg:hidden flex flex-col  justify-center place-items-center pt-2 font-[poppins] text-[16px] font-medium leading-6' >
              <li className=' h-[30px] w-full text-center hover:bg-red-300' style={{border:'2px solid gray'}}><Link to="/">Home</Link></li>
              <li  className=' h-[30px] w-full text-center hover:bg-red-300' style={{border:'2px solid gray'}}><Link to="/Shop">Shop</Link></li>
              <li  className=' h-[30px] w-full text-center hover:bg-red-300' style={{border:'2px solid gray'}}><Link to="/About">About</Link></li>
              <li  className=' h-[30px] w-full text-center hover:bg-red-300' style={{border:'2px solid gray'}}><Link to="/Contact">Contact</Link></li>
        </ol>
    
    </div>
  )
}

export default Subnavcomponent