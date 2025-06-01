import React from 'react'

interface Props {
  params: {
    id: string
  }
}

export default async function UserProfile({ params }: Props) {
  return (
    <div className='flex w-full h-screen flex-col justify-center items-center space-y-4 p-4'>
      <h1>Profile Page</h1>
      <p className='text-red-500'>User ID: '{params.id}'</p>
    </div>
  )
}