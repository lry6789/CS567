import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import Recommend from './page/Recommend'
import Commentspage from './page/Commentspage'
import Navigatebar from './components/Navigatebar'
// import AboutPage from './AboutPage';
// 更多页面组件导入...

function App () {
  return (
    <>
      <Navigatebar />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="rec" element={<Recommend />} />
        <Route path="commment" element={<Commentspage />} />
        {/* 更多路由 */}
      </Routes>
    </>
  )
}

export default App