import React from 'react'
import '../css/comments.css'
import CommentList from '../components/CommentsList'
import VideoPlayer from '../components/VideoPlayer'
import CommentsBar from '../components/CommentsBar'
import CommentsFeedback from '../components/CommentsFeedback'
const Commentspage = () => {
  return (
    <>
      <div className='commentpart'>
        <VideoPlayer />
        <div className='comment-bar-and-feedback'>

          <CommentList />
          <CommentsBar />
        </div>

      </div>
      <div className='comment-write-feedback'>
        <CommentsFeedback />
      </div>

    </>
  )


}

export default Commentspage