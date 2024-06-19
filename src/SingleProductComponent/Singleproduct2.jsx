import React from 'react'
import sofaset1 from '../images/sofaset1.png'
import sofaset2 from '../images/sofaset2.png'
import sofaset3 from '../images/sofaset3.png'
import sofaset4 from '../images/sofaset4.png'
import asgaardsofa from '../images/asgaardsofa.png'
import fivestar from '../images/fivestar.png'
import { BrowserRouter, Link } from 'react-router-dom'

function Singleproduct2() {
  return (
    <div className=' min-h-[550px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
        <div className="  min-h-[550px]  flex gap-2 justify-center pt-[30px]">

            <div className=" h-[300px] w-[100px] bg-[] grid grid-rows-4 gap-1 p-[5px]">
                <div className=" rounded-[5px] bg-[#fae1bf]">
                    <img src={sofaset1} width='100%' height='100%' alt="" />
                </div>
                <div className="rounded-[5px] bg-[#fae1bf]">
                <img src={sofaset2} width='100%' height='100%' alt="" />

                </div>
                <div className="rounded-[5px] bg-[#fae1bf]">
                <img src={sofaset3} width='100%' height='100%' alt="" />

                </div>
                <div className="rounded-[5px] bg-[#fae1bf]">
                <img src={sofaset4} width='100%' height='100%' alt="" />

                </div>
            </div>

            <div className=" h-[350px] w-[300px] bg-[#fae1bf] flex place-items-center rounded-[10px]">
            <img src={asgaardsofa} width='100%' height='100%' alt="" />

            </div>
        </div>
        <div className="  min-h-[550px] p-10">
            <h1 className=' text-[26px]'>Asgaard sofa</h1>
            <p className=' text-[gray] text-[18px]'>Rs 250,000.00</p>
            <div className=" flex gap-3">
                <section className=' ' style={{borderRight:'1px solid gray'}}><img src={fivestar} alt="" /></section>
                <span className=' text-[gray]'>Five customer review</span>
            </div>
            <p>Setting the bar as one of the loudest speakers in its class, the <br />
            killburn is a compact, stout-hearted hero with a well-balanced audio <br />
             which boasts a clear midrange and extended highs for a sound.</p>

             <div className="">
                <p>Size</p>
                <section className=' flex gap-3 '>
                    <div className=" h-[40px] w-[40px] bg-[#B88E2F] text-[white] flex justify-center place-items-center rounded-[5px]">L</div>
                    <div className=" h-[40px] w-[40px] bg-[#fae1bf] flex justify-center place-items-center rounded-[5px]">XL</div>
                    <div className=" h-[40px] w-[40px] bg-[#fae1bf] flex justify-center place-items-center rounded-[5px]">XS</div>
                </section>
             </div>

             <div className=" mt-3">
                <p>Color</p>
                <section className='  mt-3 flex gap-3 '>
                    <div className=" h-[40px] w-[40px] bg-[#816DFA] rounded-[50%]"></div>
                    <div className=" h-[40px] w-[40px] bg-[#000000] rounded-[50%]"></div>
                    <div className=" h-[40px] w-[40px] bg-[#B88E2F] rounded-[50%]"></div>
                </section>
             </div>

             <section className=' flex gap-3  mt-4'>
                    <div className=" cartinput h-[40px] w-[100px] bg-[] rounded-[10px] flex place-items-center justify-center" style={{border:'1px solid black'}}>- <input type="text" name="" id="" value={1} />+</div>
                    <button className=" h-[40px] w-[180px] bg-[] rounded-[10px]"style={{border:'1px solid gray'}} >Add To Cart</button>
                    <button className=" h-[40px] w-[180px] bg-[] rounded-[10px]" style={{border:'1px solid gray'}}>+ Compare</button>
            </section>

            <div className=" h-[150px] w-[485px]  mt-8 pt-6 text-[gray]" style={{borderTop:"1px solid gray"}}>
                <div className="">SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; SS001</div>
                <div className="">SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; SS001</div>
                <div className="">Category  : &nbsp; Sofas</div>
                <div className="">Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; Sofas, Chair, Home, Shop</div>
                <div className=" space-x-3">Share &nbsp;&nbsp;&nbsp;&nbsp; : 
                    <span><Link><i class="fa-brands fa-facebook"></i></Link></span>
                    <span><Link><i class="fa-brands fa-linkedin"></i></Link></span>
                    <span><Link><i class="fa-brands fa-twitter"></i></Link></span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Singleproduct2