import React from 'react'
import './SelectsStyles.css'

import Mauritius from '../../assets/mauritius.jpg'
import Egypt from '../../assets/egypt.jpg'
import Prague from '../../assets/prague.jpg'
import Venice from '../../assets/venice.jpg'
import Rome from '../../assets/rome.jpg'
import Paris from '../../assets/paris.jpg'


import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
  return (
    <div className='selects'>
        <div className="container">
        <SelectsImg bgImg={Mauritius} text='Mauritius' />
        <SelectsImg bgImg={Egypt} text='Egypt' />
        <SelectsImg bgImg={Prague} text='Prague' />
        <SelectsImg bgImg={Venice} text='Venice' />
        <SelectsImg bgImg={Rome} text='Rome' />
        <SelectsImg bgImg={Paris} text='Paris' />
        </div>
        
    </div>
  )
}

export default Selects
