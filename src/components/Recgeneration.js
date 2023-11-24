import { Button } from 'antd'
import React, { useState } from 'react'
import { Table } from 'antd'
import recResStore from '../store/RecResStore'
import { observer } from "mobx-react"
const columns = [
  {
    title: 'video name',
    dataIndex: ['video', 'name'],
  },
  {
    title: 'Score',
    dataIndex: 'score',
    sorter: (a, b) => a.score - b.score,
  },

]
const Recgeneration = observer(() => {

  const [start, setStart] = useState(false)
  return (
    <div>
      <h3>Generate 20 recommendations</h3>
      <Button onClick={() => { setStart(true) }}>Generate</Button>
      {start ? <Table columns={columns} dataSource={recResStore.recRes} /> : <></>}
    </div>
  )
})
export default Recgeneration