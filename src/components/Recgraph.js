import '../css/recommend.css'
import React from 'react'
import Recgraphitem1 from './Recgraphitem1'
import Recgraphitem2 from './Recgraphitem2'
import Recgraphitem3 from './Recgraphitem3'

const Recgraph = () => {
  return (

    <div className='rec-graph-component'>
      <h3>Graphs of gender bias</h3>
      <div className='rec-graph-part-1'>
        <div className='rec-graph-item'>
          <Recgraphitem1 />
        </div>
        <div className='rec-graph-item'>

          <Recgraphitem2 />
        </div>

      </div>
      <div className='rec-graph-item'>
        <Recgraphitem3 />
      </div>
    </div>

  )
}
export default Recgraph