import React from 'react'

export default function UserProfile({ params }: any) {
    return (
        <div className='flex w-full h-screen flex-col justify-center items-center space-y-4 p-4'>
            <h1>profile page</h1>
            <p className='text-red-500'>user id '{params.id}'</p>
        </div>
    )
}