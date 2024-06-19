import React from 'react'
import { useRef } from 'react'

function Contactcomponent3() {
    var form = useRef()

    function handler(e) {
        e.preventDefault()
        
    }

    // form.addEventListener('submit', (e)=>{
        
    // })

  return (
    <div className=' min-h-[400px] w-full grid grid-cols-1 md:grid-cols-[40%,60%] lg:grid-cols-[40%,60%]'>
        <div className=" min-h-[400px] bg-[] flex flex-col justify-center place-items-center">
            <div className=" h-[120px] w-[350px] grid grid-cols-[20%,80%] p-[20px]">
                <div className=" bg-[] text-[30px] pr-[10px] flex justify-end">
                    <i class="fa-solid fa-location-dot"></i>   
                </div>
                <div className=" bg-[]">
                <h1 className=' text-[20px] font-bold'>Address</h1>
                <p>236 5th SE Avenue, New <br /> York NY10000, United <br />State</p>
                </div>
            </div>


            <div className=" h-[120px] w-[350px] grid grid-cols-[20%,80%] p-[20px]">
            <div className=" bg-[] text-[30px] pr-[10px] flex justify-end">
                     <i class="fa-solid fa-phone"></i>   
                </div>
                <div className=" bg-[]">
                <h1 className=' text-[20px] font-bold'>Phone</h1>
                <p>Mobile: +(84) 546-6789 <br /> Hotline:+(84) 456-6789</p>
                </div>
            </div>


            <div className=" h-[120px] w-[350px]  grid grid-cols-[20%,80%] p-[20px]">
            <div className=" bg-[] text-[30px] pr-[10px] flex justify-end">
                     <i class="fa-solid fa-clock"></i>   
                </div>
                <div className=" bg-[]">
                <h1 className=' text-[20px] font-bold'>Working Time</h1>
                <p>Monday-Friday: 9:00 -22:00<br /> Sturday-Sunday: 9:00-21:00</p>
                </div>
            </div>
        </div>


        <div className=" min-h-[400px] bg-[] p-[30px] ">
            <form onSubmit={handler}  className='Contactform grid grid-rows-[1fr,1fr,1fr,1fr,1fr] '>
               <div className=" flex flex-col gap-3 ">
               <span>Your name</span>
               <input type="text" placeholder='Abc'/>
               </div>

                <div className="  flex flex-col gap-3">
                <span>Email address</span>
                <input type="text" placeholder='Abc@def.com'/>
                </div>
            

                
                <div className="  flex flex-col gap-3">
                <span>Subject</span>
                <input type="text" placeholder='This is an optional'/>
                </div>

                
               <div className="Lastinput  flex flex-col gap-3">
               <span>Message</span>
               <input type="text" placeholder='Hii! id like to ask about'/>
               </div>

               <div className=" mt-2 submit">
               <input type="submit" name="" id="" />
               </div>
            </form>
        </div>
    </div>
  )
}

export default Contactcomponent3