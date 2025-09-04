import { signUpSchema } from '@/schemas/signUpSchema'
import { verifySchema } from '@/schemas/verifySchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

function VerifyAccount() {
    const router = useRouter()
    const prams = useParams<{ username: string }>()

    const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema)
    })

    const onSubmit = async (data: z.infer<typeof verifySchema>) => {
        try {
            const response = await axios.post(`/api/verify-code`, {
                username: prams.username,
                code: data.code
            })

            toast("Success", {
                description: response.data.message,
            })
            router.replace('sign-in')
        } catch (error) {
            console.log("error in verifing otp user");
            const axiosError = error as AxiosError<ApiResponse>;
            let errorMassage = axiosError.response?.data.message

            toast.error("sign up faild", {
                description: errorMassage,
            })
        }
    }

    return (
        <div>

        </div>
    )
}

export default VerifyAccount