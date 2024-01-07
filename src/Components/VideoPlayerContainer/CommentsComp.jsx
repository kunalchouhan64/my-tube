import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CommentsComp = ({ data }) => {

    return (
        <>
            <div className='font-Raleway  space-y-3'>
                {
                    data.map((comment) => (
                        <div key={comment.id}>
                            <div className='flex items-center space-x-2'>
                                <FontAwesomeIcon className='border border-white rounded-full p-2' icon={faUser} />
                                <p className='capitalize'>{comment.name}</p>

                            </div>
                            <span className='px-10'>{comment.text}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CommentsComp
