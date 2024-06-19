import React from 'react'
import rect1 from '../images/rect1.png'
import adminicon from '../images/adminicon.png'
import calendar from '../images/calendar.png'
import tag from '../images/tag.png'
import { Link } from 'react-router-dom'
import rect2 from '../images/rect2.png'
import rect3 from '../images/rect3.png'
import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'
import work4 from '../images/work4.png'
import work5 from '../images/work5.png'

function Blogcomponent2() {
  return (
    <div className=" lg:ml-[70px] lg:mr-[90px] mt-7">
        <div className=' h-[] w-full  grid gap-2 grid-cols-1   md:grid-cols-[70%,30%] lg:grid-cols-[70%,30%]'>
        <div className=" bg-[] md:pl-7 md:pr-7 lg:pr-7 ">

            <div className=" mt-5">
                <div className=" md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px] bg-slate-400 rounded-[10px]"><img src={rect1} alt=""  style={{height:'100%'}}/></div>


                <div className=" h-[40px] w-[400px] grid grid-cols-3 mt-2">

                        <div className="  flex place-items-center">
                            <span className=' flex text-[gray]'><img src={adminicon} alt="" />admin</span>
                        </div>
                        <div className="  flex place-items-center">
                        <span className=' flex text-[gray]'><img src={calendar} alt="" />14 oct 2022</span>
                        </div>
                        <div className=" flex place-items-center">
                        <span className=' flex text-[gray]'><img src={tag} alt="" />Wood</span>
                        </div>


                </div>
                <div className=" " style={{lineHeight:'38px'}}>
                    <h1 className=' text-[25px]'>Going all-in with millenial design</h1>
                    <p className=' text-justify' style={{lineHeight:'25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum recusandae in, ipsa cumque quo dicta ut dolores corrupti? Repellat nam ratione illum nobis veniam dicta! Velit deleniti sint doloribus odit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus architecto delectus, reiciendis minima adipisci, omnis, libero quos similique beatae sit ut pariatur molestiae veniam placeat deleniti suscipit a aliquid?
                    </p>
                    <span><Link className=''><u>Read More</u></Link></span>
                </div>
            </div>


            <div className=" mt-5">
                <div className=" md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px] bg-slate-400 rounded-[10px]"><img src={rect2} alt=""  style={{height:'100%'}}/></div>


                <div className=" h-[40px] w-[400px]  grid grid-cols-3 mt-2">

                        <div className="  flex place-items-center">
                            <span className=' flex text-[gray]'><img src={adminicon} alt="" />admin</span>
                        </div>
                        <div className=" flex place-items-center">
                        <span className=' flex text-[gray]'><img src={calendar} alt="" />14 oct 2022</span>
                        </div>
                        <div className="  flex place-items-center">
                        <span className=' flex text-[gray]'><img src={tag} alt="" />Handmade</span>
                        </div>


                </div>
                <div className=" " style={{lineHeight:'38px'}}>
                    <h1 className=' text-[25px]'>Exploring a new way of decorating</h1>
                    <p className=' text-justify' style={{lineHeight:'25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum recusandae in, ipsa cumque quo dicta ut dolores corrupti? Repellat nam ratione illum nobis veniam dicta! Velit deleniti sint doloribus odit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus architecto delectus, reiciendis minima adipisci, omnis, libero quos similique beatae sit ut pariatur molestiae veniam placeat deleniti suscipit a aliquid?
                    </p>
                    <span><Link className=''><u>Read More</u></Link></span>
                </div>
            </div>


            <div className=" mt-5">
                <div className=" md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px] bg-slate-400 rounded-[10px]"><img src={rect3} alt=""  style={{height:'100%'}}/></div>


                <div className=" h-[40px] w-[400px]  grid grid-cols-3 mt-2">

                        <div className="  flex place-items-center">
                            <span className=' flex text-[gray]'><img src={adminicon} alt="" />admin</span>
                        </div>
                        <div className="  flex place-items-center">
                        <span className=' flex text-[gray]'><img src={calendar} alt="" />14 oct 2022</span>
                        </div>
                        <div className=" flex place-items-center">
                        <span className=' flex text-[gray]'><img src={tag} alt="" />Wood</span>
                        </div>


                </div>
                <div className=" " style={{lineHeight:'38px'}}>
                    <h1 className=' text-[25px]'>Handmade pieces that took time to make</h1>
                    <p className=' text-justify' style={{lineHeight:'25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum recusandae in, ipsa cumque quo dicta ut dolores corrupti? Repellat nam ratione illum nobis veniam dicta! Velit deleniti sint doloribus odit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusamus architecto delectus, reiciendis minima adipisci, omnis, libero quos similique beatae sit ut pariatur molestiae veniam placeat deleniti suscipit a aliquid?
                    </p>
                    <span><Link className=''><u>Read More</u></Link></span>
                </div>
            </div>




        </div>
        <div className=" bg-[] pt-[50px] mb-[60px] md:mb-0 lg:mb-0">
            <div className=" w-[300px] md:w-[200px] lg:w-[300px] space-y-7">
                <input type="text" name="" id="" className=' myinp h-[40px] rounded-[7px]' placeholder='search' style={{border:'1px solid gray'}}/>
                <h1 className=' text-[20px]'>Categories</h1>
                <section className=' mt-[10px] flex justify-between text-[gray]'><span>Crafts</span> <span>2</span></section>
                <section className=' flex justify-between text-[gray]'><span>Designs</span> <span>8</span></section>
                <section className='flex justify-between text-[gray]'><span>Handmade</span> <span>7</span></section>
                <section className='flex justify-between text-[gray]'><span>Wood</span> <span>6</span></section>
            </div> <br />
            <br />

            <div className=" space-y-8">
                <h1 className=' text-[20px]'>Recent Post</h1>
                <section className=' h-[100px] w-full  grid grid-cols-[40%,60%] gap-2'>
                    <div className=" bg-slate-500 rounded-[10px]"><img src={work1} alt="" className=' h-[100%] w-[100%]' /></div>
                    <div className="  flex flex-col justify-center">
                        <p className=' text-[18px]'>Going all-in with <br /> millenial design</p>
                        <span className='text-[gray]'>03 Aug 2022</span>
                    </div>
                </section>
                <br />

                <section className=' h-[100px] w-full  grid grid-cols-[40%,60%] gap-2'>
                    <div className=" bg-slate-500 rounded-[10px]"><img src={work2} alt="" className=' h-[100%] w-[100%]'/></div>
                    <div className="  flex flex-col justify-center">
                        <p className=' text-[18px]'>Exploring new ways <br /> of decorating</p>
                        <span className='text-[gray]'>03 Aug 2022</span>
                    </div>
                </section>
                    <br />

                <section className=' h-[100px] w-full  grid grid-cols-[40%,60%] gap-2'>
                    <div className=" bg-slate-500 rounded-[10px]"><img src={work3} alt="" className=' h-[100%] w-[100%]'/></div>
                    <div className="  flex flex-col justify-center">
                        <p className=' text-[18px]'>Handmade pieces <br /> that took time to make </p>
                        <span className='text-[gray]'>03 Aug 2022</span>
                    </div>
                </section>
                <br />


                <section className=' h-[100px] w-full grid grid-cols-[40%,60%] gap-2'>
                    <div className=" bg-slate-500 rounded-[10px]"><img src={work4} alt="" className=' h-[100%] w-[100%]'/></div>
                    <div className="  flex flex-col justify-center">
                        <p className=' text-[18px]'>Modern home in <br /> milan</p>
                        <span className='text-[gray]'>03 Aug 2022</span>
                    </div>
                </section>
                <br />


                <section className=' h-[100px] w-full grid grid-cols-[40%,60%] gap-2'>
                    <div className=" bg-slate-500 rounded-[10px]"><img src={work5} alt="" className=' h-[100%] w-[100%]'/></div>
                    <div className=" flex flex-col justify-center">
                        <p className=' text-[18px]'>Colorful office <br /> redesign</p>
                        <span className='text-[gray]'>03 Aug 2022</span>
                    </div>
                </section>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blogcomponent2