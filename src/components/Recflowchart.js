import React from 'react'
import '../css/recommend.css'
import Recflowchartcust from './Recflowchartcust'
const Recflowchart = () => {

  return (
    <div className='rec-flowchart-component'>

      <div className="rec-flowchart-part">

        <div>
          <h3>The flowchart of recommendation algorithm</h3>
          <img src={'/images/Flowchart.png'} alt={'flowchart'} className='rec-flowchart-img' />
        </div>
        <div className="rec-customization-part">
          <Recflowchartcust />
        </div>
      </div>

    </div>
  )
}

export default Recflowchart
