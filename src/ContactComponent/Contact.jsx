import React from 'react'
import Contactcomponent1 from './Contactcomponent1'
import Contactcomponent2 from './Contactcomponent2'
import Contactcomponent3 from './Contactcomponent3'
import Beforefooter from '../ReUsablecomponent/Beforefooter'
function Contact() {
  return (
    <div className=' bg-[] h-full'>
      <Contactcomponent1/>
      <Contactcomponent2/>
      <Contactcomponent3/>
      <Beforefooter/>
      
    </div>
  )
}

export default Contact