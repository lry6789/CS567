import '../css/recommend.css'
import React, { useState } from 'react'
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Menu, Divider } from 'antd'
import Recflowchart from '../components/Recflowchart'
import Recgraph from '../components/Recgraph'
import Recgeneration from '../components/Recgeneration'
function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem('Flowchart and customization', '1', <DesktopOutlined />),
  getItem('Graphs', '2', <PieChartOutlined />),
  getItem('Recommendation generation', '3', <ContainerOutlined />),
]
const Recommend = () => {
  const [current, setCurrent] = useState('1')
  const setSubpage = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <div className='rec'>
      <div >
        <h3>Navigate bias here!</h3>
        <h3>In this page, the visualization of recommendation and customization will be available!</h3>
      </div>
      <Divider plain ></Divider>
      <div className='rec-main'>
        <div className='rec-menu'>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            onClick={setSubpage}
          />
        </div>
        <div className='rec-main-show'>
          {current === '1' ? <Recflowchart /> : current === '2' ? <Recgraph /> : <Recgeneration />}

        </div>

      </div>
    </div>
  )


}

export default Recommend