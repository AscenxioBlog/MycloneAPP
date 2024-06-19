import React from 'react'
import Blogcomponent1 from './Blogcomponent1'
import Blogcomponent2 from './Blogcomponent2'
import Bloglastcompo from './Bloglastcompo'
import Beforefooter from '../ReUsablecomponent/Beforefooter'

function About() {
  return (
    <div className=' bg-[] h-full'>
        <Blogcomponent1/>
        <Blogcomponent2/>
        <Bloglastcompo/>
        <Beforefooter/>
    </div>
  )
}

export default About