import React from 'react'
import '../css/homepage.css'
import VideoList from '../components/VideoList'
import VideoPlayer from '../components/VideoPlayer'
const Homepage = () => {
  return (

    <div className='videopart'>
      <VideoPlayer />
      <VideoList />
    </div>

  )


}

export default Homepage