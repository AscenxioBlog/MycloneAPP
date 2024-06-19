import React from 'react'
import Homecomponent1 from './Homecomponent1'
import Homecomponent4 from './Homecomponent4'
import Homecomponent5 from './Homecomponent5'
import Homecomponent2 from './Homecomponent2'
import Homecomponent3 from './Homecomponent3'
import Testrun from '../Testrun'

function Homeindex() {
  return (
    <div>
        <Homecomponent1/>

        <Homecomponent2/>
        {/* <Testrun/> */}

        <Homecomponent3/>
        <Homecomponent4/>
        <Homecomponent5/>

    </div>
  )
}

export default Homeindex