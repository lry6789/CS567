
import React, { useState } from 'react'
import { List, Avatar, Space } from 'antd'
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled, UserOutlined } from '@ant-design/icons'

const CommentItem = ({ comment }) => {
  const [likes, setLikes] = useState(comment.likes)
  const [dislikes, setDislikes] = useState(comment.dislikes)
  const [action, setAction] = useState(null)

  const onLike = () => {
    if (action === null) {
      setLikes(likes + 1)
      setAction('liked')
    }
    else if (action === 'liked') {
      setLikes(likes - 1)
      setAction(null)
    }
    else if (action === 'disliked') {
      setLikes(likes + 1)
      setDislikes(dislikes - 1)
      setAction('liked')
    }


  }

  const onDislike = () => {
    if (action === null) {
      setDislikes(dislikes + 1)
      setAction('disliked')
    }
    else if (action === 'liked') {
      setLikes(likes - 1)
      setDislikes(dislikes + 1)
      setAction('disliked')
    }
    else if (action === 'disliked') {
      setDislikes(dislikes - 1)
      setAction(null)
    }
  }

  return (
    <List.Item
      actions={[
        <Space>
          <span onClick={onLike}>
            {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
          </span>
          <span onClick={onDislike}>
            {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
          </span>
        </Space>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar shape="square" size="small" icon={<UserOutlined />} />}
        title={<a href="#!">{comment.author}</a>}
        description={comment.content}
      />
      {/* 可以添加额外的内容或操作 */}
    </List.Item>

  )
}
export default CommentItem