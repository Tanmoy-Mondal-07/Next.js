"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function ProfilePage() {
  const router = useRouter()
  const logout=async()=>{
    try {
      await axios.get('api/users/logout')
      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>Error "No user id found"</div>
      <button
      onClick={logout}
      >logout</button>
    </>
  )
}

export default ProfilePage