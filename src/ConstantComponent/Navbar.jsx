import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/Frame168.jpg"
import Shoppincart from '../ReUsablecomponent/Shoppincart'
import Subnavcomponent from './Subnavcomponent'

function Navbar() {
  var [hide,Showhide]=useState('none')
  var [hide2,Showhide2]=useState('none')
  function clickme() {
      Showhide('block')   
  }
  function clickus() {
      Showhide('none')    
  }
  function subnav() {
   if (hide2=='none') {
    Showhide2('block')
   }
   else{
   Showhide2('none')
  }
}
  return (
    <div className=' ' style={{transition:'2s'}}>
      <header className=" h-[100px] w-full bg-[] flex justify-center place-items-center">
        <div className=" h-[41px] w-[90%] bg-[] grid grid-cols-2  md:grid-cols-[30%,40%,30%] lg:grid-cols-[30%,40%,30%] gap-7">
          <nav className=" bg-[]">
            <div className=" h-[41px] w-[185px]  bg-[]">
                <img src={logo} alt=""  />
            </div>
          </nav>
          <nav className=" bg-[] hidden md:inline-block lg:inline-block">
            <ol className=' flex gap-8 justify-center pt-2 font-[poppins] text-[16px] font-medium leading-6'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Shop">Shop</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ol>
          </nav>
          <nav className=" bg-[] ">
            <ol  className=' flex gap-2  md:gap-2 lg:gap-4 justify-center pt-2'>
              <li><Link><i class="fa-solid fa-user-pen"></i></Link></li>
              <li><Link><i class="fa-solid fa-magnifying-glass"></i></Link></li>
              <li><Link><i class="fa-regular fa-heart"></i></Link></li>
              <li><button onClick={clickme}><i class="fa-solid fa-cart-plus"></i></button></li>
              <li><button className=' md:hidden lg:hidden' onClick={subnav}><i class="fa-solid fa-table-cells-large"></i></button></li>
            </ol>
          </nav>
        </div>
      </header>
      <Shoppincart show={clickus} mydisplay={hide}  /> <Subnavcomponent showsubnav={hide2}/>

    </div>
  )
}

export default Navbar