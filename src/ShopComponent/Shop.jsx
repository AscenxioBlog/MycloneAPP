import React from 'react'
import Shopcomponent1 from '../ShopComponent/Shopcomponent1'
import Shopcomponent2 from '../ShopComponent/Shopcomponent2'
import Beforefooter from '../ReUsablecomponent/Beforefooter'

function Shop() {
  return (
    <div className=' bg-[] h-[]'>
      <Shopcomponent1/>
      <Shopcomponent2/>
      <Beforefooter/>
     
    </div>
  )
}

export default Shop