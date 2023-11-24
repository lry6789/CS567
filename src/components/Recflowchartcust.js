import React, { useState } from 'react'
import '../css/recommend.css'
import { InputNumber, Button } from 'antd'
import { observer } from "mobx-react"
import recWeightsStore from '../store/RecWeightsStore'
import recResStore from '../store/RecResStore'

const Recflowchartcust = observer(() => {
  const [factor1, setFactor1] = useState(recWeightsStore.history)
  const [factor2, setFactor2] = useState(recWeightsStore.interaction)
  const [factor3, setFactor3] = useState(recWeightsStore.demographics)
  const onChange1 = (value) => {
    setFactor1(value)
  }
  const onChange2 = (value) => {
    setFactor2(value)
  }
  const onChange3 = (value) => {
    setFactor3(value)
  }
  const submit = () => {
    if (factor1 + factor2 + factor3 === 100) {
      recWeightsStore.setHistory(factor1)
      recWeightsStore.setInteraction(factor2)
      recWeightsStore.setDemographics(factor3)
      recResStore.update()
      alert('Revise successfully!')
    }
    else {
      console.log(factor1 + ' ' + factor2 + ' ' + factor3)
      alert('The sum of the weight must be 100%!')
    }
  }
  return (
    <>
      <h3>Factor customization</h3>
      <div className='rec-flowchart-cust-row'>
        <p className='rec-flowchart-cust-title'>Browsing history</p>
        <InputNumber
          className='rec-flowchart-cust-input'
          defaultValue={recWeightsStore.history}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value.replace('%', '')}
          onChange={onChange1}
        />
      </div>
      <div className='rec-flowchart-cust-row'>
        <p className='rec-flowchart-cust-title'>Interaction with ads</p>
        <InputNumber
          className='rec-flowchart-cust-input'
          defaultValue={recWeightsStore.interaction}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value.replace('%', '')}
          onChange={onChange2}
        />
      </div>
      <div className='rec-flowchart-cust-row'>
        <p className='rec-flowchart-cust-title'>Demographics</p>
        <InputNumber
          className='rec-flowchart-cust-input'
          defaultValue={recWeightsStore.demographics}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value.replace('%', '')}
          onChange={onChange3}
        />
      </div>
      <Button onClick={submit}>Submit</Button>
    </>
  )

})
export default Recflowchartcust