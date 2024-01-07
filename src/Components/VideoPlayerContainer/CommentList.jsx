import React from 'react'
import CommentsComp from './CommentsComp'

const CommentList = ({coments}) => {
    return (
        <>
            {
                coments.map((com) => (
                    <CommentsComp data={com} />
                ))
            }
        </>
    )
}

export default CommentList
