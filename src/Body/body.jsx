import React from 'react'
import BriefAbout from './components/BriefAbout/briefAbout'
import Mission from './components/Mission/mission'
import './body.css'
const Body = () => {
    return (
        <div id='body'>
            <BriefAbout />
            <Mission />
        </div>
    )
}

export default Body
