import React from 'react'
import Beforefooter from '../ReUsablecomponent/Beforefooter'
function Checkoutcomponent2() {
  return (
   <div className="">
         <div className='  min-h-[90vh] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:pl-10 lg:pr-10 gap-5'>
        <div className=" min-h-[80vh]  flex flex-col place-items-center pl-[10px]">

            <div className=" h-[70px] w-[60%] pl-9  text-[20px] font-bold flex place-items-center">Billing details</div>

            <div className="  h-[100px] w-full lg:w-[60%]  grid grid-cols-2 gap-2 md:pl-2 lg:pl-2  ">
                <section className='bg-[] flex flex-col md:place-items-end lg:place-items-end'>
                    <span>Firstname</span>
                    <input type="text" name="" id="" className=' h-[40px] w-[150px] rounded-[10px] mt-3 ' style={{border:'1px solid gray'}} />
                </section>
                <section className='bg-[] flex flex-col'>
                <span>Laststname</span>
                <input type="text" name="" id="" className=' h-[40px] w-[150px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />
                </section>
            </div>

            <div className=" h-[80px] sm:w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Company Name (Optional)</span>
                <input type="text" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] sm:w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Country / Region</span>
                <select  name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3 text-[gray]' style={{border:'1px solid gray'}} >
                    <option value="" >Sri Lanka</option>
                </select>

            </div>

            <div className=" h-[80px] sm:w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Street Address</span>
                <input type="text" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Town / City</span> <br />
                <input type="text" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Province</span> <br />
                <select  name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3 text-[gray]' style={{border:'1px solid gray'}} >
                    <option value="" >Western Province</option>
                </select>

            </div>

            <div className=" h-[80px] w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Zip Code</span><br />
                <input type="text" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Phone</span> <br />
                <input type="number" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] sm:w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                <span>Email Address</span>
                <input type="text" name="" id="" className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>

            <div className=" h-[80px] w-full  md:w-full md:pl-[30px] lg:w-[60%] ">
                
                <input type="text" name="" id="" placeholder='Additional Informaton' className=' h-[40px] w-[300px] rounded-[10px]  mt-3' style={{border:'1px solid gray'}} />

            </div>
        </div>
        <div className=" min-h-[80vh]  flex flex-col place-items-center ">
            <div className=" h-[250px] w-[70%]  flex flex-col justify-center mb-3" style={{borderBottom:'1px solid gray'}}>
            <section className=' w-full flex justify-between text-[20px] font-bold'>
                    <span>Product</span>
                    <span>Subtotal</span>
                </section>

                <section className=' w-full flex justify-between text-[18px]'>
                    <div><span className=' text-[gray]'>Asgaard sofa</span> X 1</div>
                    <span>Rs. 250,000.000</span>
                </section>

                <section className=' w-full flex justify-between text-[18px]'>
                    <span>Subtotal</span>
                    <span>Rs. 250,000.000</span>
                </section>

                <section className=' w-full flex justify-between text-[18px]'>
                    <span>Total</span>
                    <span className=' text-[gold] text-[20px]'>Rs. 250,000.000</span>
                </section>
            </div>
            <div className=" h-[350px] w-[70%] ">
                
                    <li>Direct Bank Transfer</li>
                    <p  className=' mb-3 text-[gray] '>Make your payment directly into our bank account. Please use your order ID as the payment reference. Your order will not be shipped until the fund have cleared in our account</p>
                    <span className=' text-[gray]'><input type="radio" name="payment" id="" /> Direct Bank Transfer</span> <br />
                    <span className=' text-[gray]'><input type="radio" name="payment" id="" /> Cash On Delivery</span>

                    <p className=' mt-5'>Your personal data will be use to support your experience throughout this website, to manage accesss to your account, and for other purpose described in our <b> privacy policy</b></p>

                    <button className=' h-[40px] w-[150px] mt-4 rounded-[10px]' style={{border:'1px solid gray'}}>Place Order</button>
                
            </div>
        </div>
    </div>
<Beforefooter/>

   </div>
  )
}

export default Checkoutcomponent2