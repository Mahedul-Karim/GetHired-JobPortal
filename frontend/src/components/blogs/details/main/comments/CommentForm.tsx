import React from 'react'
import TextArea from '../../../../ui/form/TextArea'
import Button from '../../../../ui/button/Button'

const CommentForm = () => {
  return (
    <div>
        <TextArea placeholder='Write a comment'/>
        <Button style={{width:'100%'}} className='mt-4'>Comment</Button>
    </div>
  )
}

export default CommentForm