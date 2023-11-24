import React from 'react'
import { Progress } from 'antd'
import '../css/comments.css'

import { observer } from "mobx-react"
import commentFeedbackStore from "../store/CommentFeedbackStore"
const CommentsBar = observer(() => {
  return (
    <div className='comment-bar'>
      <h4>Statistical data of gender bias label</h4>

      <div className='comment-bar-line'>
        <text className='comment-bar-name'>{`Related to gender bias (${commentFeedbackStore.related})`}</text>
        <Progress percent={commentFeedbackStore.relatedPortion} strokeColor='#8470FF' className='comment-bar-line-progress' />
      </div>
      <div className='comment-bar-line'>
        <text className='comment-bar-name'>{`Unrelated to gender bias (${commentFeedbackStore.unrelated})`}</text>
        <Progress percent={commentFeedbackStore.unRelatedPortion} strokeColor='#EE6353' className='comment-bar-line-progress' />
      </div>
      <div className='comment-bar-line'>
        <text className='comment-bar-name'>{`Unclear (${commentFeedbackStore.unclear})`}</text>
        <Progress percent={commentFeedbackStore.unclearPortion} strokeColor='#D2691E' className='comment-bar-line-progress' />
      </div>

    </div>
  )
})
export default CommentsBar