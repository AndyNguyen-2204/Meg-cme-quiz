import React from 'react'
import Traced_one from './traced_svg/traced_one'
import Traced_three from './traced_svg/traced_three'
import Traced_two from './traced_svg/traced_two'
import Line from "./line/line"
import { Link } from 'react-router-dom'
export default function splashScreen() {
  return (
    <div className='wrap_splash_screen'>
        <div className='content_page_splash'>
            <div className='content_page_splash_inner'>
            <p>Do you know which of today’s technologies contain critical minerals found in NSW?</p>
           <Link to="/first-screen">
           <div className='content_splash_page_bottom'>
                         <p>questions</p>
                         <Line/>
            </div></Link>
            </div>
        </div>
        <div className='traced'>
          <Traced_one/>
          <Traced_two/>
          <Traced_three/>
        </div>
    </div>
  )
}
