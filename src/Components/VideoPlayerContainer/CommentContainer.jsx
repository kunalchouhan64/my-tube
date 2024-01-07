import React from 'react'
import CommentsComp from './CommentsComp'
import CommentList from './CommentList'

const CommentContainer = () => {
    const data = [
        {
            id: 1,
            name: 'kunal',
            text: 'lorem ipsum doles sit do ki te ri maa ki..',
            replies: [
            ]
        },
        {
            id: 2,
            name: 'chandu',
            text: 'lorem ipsum doles sit do ki te ri maa ki..',
            replies: [
                {
                    id: 1,
                    name: 'akash',
                    text: 'lorem ipsum doles sit do ki te ri maa ki..',
                    replies: [
                    ]
                },
                {
                    id: 2,
                    name: 'arun',
                    text: 'lorem ipsum doles sit do ki te ri maa ki..',
                    replies: [
                        {
                            id: 1,
                            name: 'ankit',
                            text: 'lorem ipsum doles sit do ki te ri maa ki..',
                            replies: [
                            ]
                        },
                        {
                            id: 2,
                            name: 'pandit',
                            text: 'lorem ipsum doles sit do ki te ri maa ki..',
                            replies: [
                            ]
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'manoj',
                    text: 'lorem ipsum doles sit do ki te ri maa ki..',
                    replies: [
                    ]
                },
            ]
        },
        {
            id: 3,
            name: 'mohit',
            text: 'lorem ipsum doles sit do ki te ri maa ki..',
            replies: [
            ]
        },
        {
            id: 4,
            name: 'kanha',
            text: 'lorem ipsum doles sit do ki te ri maa ki..',
            replies: [
            ]
        },
        {
            id: 5,
            name: 'tarun',
            text: 'lorem ipsum doles sit do ki te ri maa ki..',
            replies: [
            ]
        },
    ]

    return (
        <>
            <div className='py-4 px-5 bg-zinc-800 rounded-xl text-white'>
                <p className='space-x-2'>
                    <span className='font-Raleway text-xl font-semibold'>00</span>
                    <span className='text-sm md:text-xl font-semibold font-Raleway'>Comments:</span>
                </p>

                <CommentList coments={data} />

            </div>
        </>
    )
}

export default CommentContainer
