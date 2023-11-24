// components/VideoList.js
import React from 'react'
import VideoListItem from './VideoListItem'
import '../css/video.css'

const VideoList = () => {
  // Mock data for video list items
  const videos = [
    {
      title: 'Taking to the Skies: The Unstoppable Red Cape Hero', views: '71K views', posted: '18 days ago', index: 1, image: '/images/cover1.jpg',
    },
    {
      title: 'Serene Dusk: Majestic Mountain and the Symphony of Twilight', views: '231K views', posted: '7 days ago', index: 2, image: '/images/cover2.jpg',
    },
    {
      title: 'Ascending Dreams: A Journey Through the Skies in a Hot Air Balloon', views: '32K views', posted: '2 days ago', index: 3, image: '/images/cover3.jpg',
    }
    // Add more video objects here
  ]

  return (
    <div className="video-list">
      <h3>Related videos</h3>
      {videos.map((video, index) => (
        <VideoListItem key={index} video={video} />
      ))}
    </div>
  )
}

export default VideoList