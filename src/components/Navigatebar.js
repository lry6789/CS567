import React from 'react'
import '../css/nav.css'
import { Input, Button } from 'antd'
import { AudioOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const { Search } = Input


const Navigatebar = () => {
  let navigate = useNavigate()
  const navToHome = () => {
    navigate('')
  }
  const navToRec = () => {
    navigate('rec')
  }
  const navToCom = () => {
    navigate('commment')
  }
  return (
    <nav className='nav'>
      <Button
        icon={<MenuOutlined />}
        className='navbar-set' />

      {/* Logo */}
      <img
        src='/images/logo.png'
        alt="Logo"
        className="navbar-logo"
        onClick={navToHome} />

      {/* Search Box */}
      <Search
        placeholder="input search text"
        enterButton={<Button icon={<SearchOutlined />} />}
        size="large"
        className='navbar-search' />

      <Button
        shape="circle"
        icon={<AudioOutlined />}
        className='navbar-audio' />

      <Button className='navbar-rec' onClick={navToRec}>Recommendations visualization</Button>
      <Button className='navbar-gender' onClick={navToCom}>Feedback</Button>
    </nav>
  )
}

export default Navigatebar