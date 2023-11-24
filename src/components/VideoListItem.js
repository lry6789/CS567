import React from 'react'
import '../css/video.css'
const VideoListItem = ({ video }) => {
  console.log(video.image)
  return (
    <div className="video-list-item">

      <img src={video.image} alt={video.title} className='video-list-item-image' />
      {/* Placeholder or actual thumbnail */}
      <div className="video-list-item-title">
        <h5>{video.title}</h5>
        <p>{video.views} · {video.posted}</p>
      </div>
    </div>
  )
}

export default VideoListItem