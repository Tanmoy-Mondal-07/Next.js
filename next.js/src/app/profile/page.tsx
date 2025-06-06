"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function ProfilePage() {
  const router = useRouter()
  const [data, setdata] = useState("")

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      console.log(res.data);
      setdata(res.data.data._id)
    }
    getUserDetails()
  }, [])

  const logout = async () => {
    try {
      await axios.get('api/users/logout')
      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>{data ? <Link href={`/profile/${data}`}>{data}</Link> : 'Error "No user id found"'}</div>
      <button
        onClick={logout}
      >logout</button>
    </>
  )
}

export default ProfilePage