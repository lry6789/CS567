
import React, { useState } from 'react'
import { Radio, Input, Button } from 'antd'
import '../css/comments.css'
import commentFeedbackStore from "../store/CommentFeedbackStore"

const { TextArea } = Input
const CommentsBar = () => {
  const [opt, setOpt] = useState('default')
  const [comment, setComment] = useState('')
  const handleOptChange = (e) => {
    setOpt(e.target.value)
  }
  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }
  const handleSubmit = () => {
    if (comment !== '') {
      commentFeedbackStore.addData(comment)
      commentFeedbackStore.addLabel(opt)
      setComment('')
      setOpt('default')
      alert('Submit feedback successfully!')
    }
    else {
      alert('Comment cannot be null!')
    }

  }
  return (
    <>
      <h4>Comment Feedback</h4>
      <div className='comment-write-feedback-in'>
        <div>
          Label here!
          <div className='comment-write-select'>
            <Radio.Group value={opt} onChange={handleOptChange}>
              <Radio.Button value="Related">Related to gender bias</Radio.Button>
              <Radio.Button value="Unrelated">Unrelated to gender bias</Radio.Button>
              <Radio.Button value="Unclear">Unclear</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className='comment-write-input-out'>
          Write comment here!
          <TextArea
            rows={4}
            placeholder="Comment"
            className='comment-write-input-in'
            onChange={handleCommentChange}
            value={comment} />
        </div>
      </div>
      <Button onClick={handleSubmit} className='comment-write-submit'>Submit</Button>
    </>
  )

}

export default CommentsBar