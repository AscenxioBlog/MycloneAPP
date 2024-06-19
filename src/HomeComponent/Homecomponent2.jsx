import React from 'react'


function Homecomponent2() {
  return (
    <div className='wrap h-[auto] w-full bg-[]'>
      <div className=' h-[100px] bg-[]'>
      <center><h1 className=' text-[35px] font-bold font-[poppins]'>Browse The Range</h1></center>
      <center><p className=' font-[poppins] text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, ipsa.</p></center>
      </div>
      <div className=" h-[auto] pt-[20px] pb-[20px] mb-[20px] bg-[] boy  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[20px] pl-[100px] pr-[100px]">
        <div className=" bg-[]">
          <div className="Hcompo21 a rounded-[10px]  h-[350px]"> </div>
          <div className="  h-[50px] text-center pt-[10px] font-[poppins] font-semibold"><h4>Dining</h4></div>
        </div>

        <div className=" bg-[] ">
          <div className="Hcompo22 a bg-[silver] rounded-[10px] h-[350px]"></div>
          <div className="  h-[50px] text-center pt-[10px] font-[poppins] font-semibold"><h4>Living</h4></div>
        </div>

        <div className=" bg-[] ">
          <div className="Hcompo23 a bg-[aqua] rounded-[10px] h-[350px]"></div>
          <div className="  h-[50px] text-center pt-[10px] font-[poppins] font-semibold">Bedroom</div>
        </div>

      </div>

    </div>
  )
}

export default Homecomponent2