import React from 'react'

function Homecomponent1() {
  return (
    <div className='Hcompo h-[60vh] md:h-[69vh] lg:h-[90vh] w-full bg-[green] flex place-items-center justify-end'>
        <div className=" h-[45%] md:h-[45%] lg:h-[55%] w-[240px] md:w-[400px] lg:w-[540px] bg-[#fae1bf] mr-[20px] md:mr-[30px] lg:mr-[80px] md:pl-[30px] lg:pl-[30px] md:pt-[20px] lg:pt-[30px]">
            <h6 className=' md:text-[18px] lg:text-[18px] font-semibold font-[poppins]'>New Arrival</h6>
            <h1 className=' md:text-[40px] lg:text-[40px] font-bold font-[poppins]'>Discover Our</h1>
            <h1  className=' md:text-[40px] lg:text-[40px] font-bold font-[poppins]'>New Collection</h1>
            <p className=' font-[poppins] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime porro cumque quae possimus voluptatibus voluptas moles</p>
            <button className=' h-[30px] md:h-[50px] lg:h-[45px] w-[120px] md:w-[180px] lg:w-[180px] bg-[#B88E2F] text-[white] font-[poppins] font-bold mt-2'>BUY NOW</button>
        </div>

    </div>
  )
}

export default Homecomponent1