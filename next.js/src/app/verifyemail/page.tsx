"use client"
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function verifyEmailPage() {
    const [token, settoken] = useState<any>("")
    const [verified, setverified] = useState(false)
    const [error, seterror] = useState<Boolean>(false)

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setverified(true)
        } catch (error: any) {
            seterror(true)
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        settoken(urlToken || "")
    }, [])

    useEffect(() => {
        if (token?.length > 0) {
            verifyUserEmail()
        }
    }, [token])

    return (
        <>
            <h1>verify email</h1>
            <h2>{token ? `${token}` : "no token"}</h2>
            <h2>{verified && "email verified"}</h2>
            <Link href='/login'>Login</Link>
            <h2>{error && "Error"}</h2>
        </>
    )

}