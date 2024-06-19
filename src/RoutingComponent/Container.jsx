import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../AboutComponent/About'
import Shop from '../ShopComponent/Shop'
import Contact from '../ContactComponent/Contact'
import Navbar from '../ConstantComponent/Navbar'
import Homeindex from '../HomeComponent/Homeindex'
import Footer from '../ConstantComponent/Footer'
import Singleproduct from '../SingleProductComponent/Singleproduct'
import ComparisonComponent from '../ComparisonComponent/ComparisonComponent'
import MainCart from '../ReUsablecomponent/MainCart'
import Checkoutcomponent from '../Checkout/Checkoutcomponent'



function Container() {
  return (
    <div >
        <BrowserRouter>
        <Navbar/>

            <Routes>
                <Route path='/' element={<Homeindex/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Shop' element={<Shop/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Singleproduct' element={<Singleproduct/>}/>
                <Route path='/ComparisonComponent' element={<ComparisonComponent/>}/>
                <Route path='/MainCart' element={<MainCart/>}/>
                <Route path='/Checkoutcomponent' element={<Checkoutcomponent/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default Container