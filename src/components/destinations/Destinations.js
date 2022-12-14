import React from 'react'
import './DestinationsStyles.css'

import Mauritius from '../../assets/mauritius.jpg'
import Egypt from '../../assets/egypt.jpg'
import Prague from '../../assets/prague.jpg'
import Venice from '../../assets/venice.jpg'
import Rome from '../../assets/rome.jpg'

function Destinations() {
  return (
    <div className='destinations'>
        <div name='destinations' className="container">
            <h1>Top Places I Have Visited</h1>
            <p>All around the world</p>
        <div className="img-container">
            <img className='span-3 image-grid-row-2' src={Egypt} alt="/" />
            <img src={Mauritius} alt="/" />
            <img src={Prague} alt="/" />
            <img src={Venice} alt="/" />
            <img src={Rome} alt="/" />
      </div>
    </div>
    </div>
  )
}

export default Destinations
