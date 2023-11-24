import React from 'react'
import { List } from 'antd'
import CommentItem from './CommentsItem'
import { observer } from "mobx-react"
import commentFeedbackStore from "../store/CommentFeedbackStore"


const CommentList = observer(() => {
  return (
    <div className='comment-list'>
      <h4> {`Comments of gender bias from other users - ${commentFeedbackStore.commentData.length} replies`}</h4>
      <List
        pagination={{ pageSize: 5, }}

        className='comment-list'
        itemLayout="horizontal"
        dataSource={commentFeedbackStore.commentData}
        renderItem={item => (
          <CommentItem comment={item} />
        )}
      />
    </div>
  )
})
export default CommentList