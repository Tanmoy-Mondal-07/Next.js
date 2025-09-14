'use client'
import { Message } from '@/model/User'
import { AcceptMessageSchema } from '@/schemas/acceptMessageSchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { useSession } from 'next-auth/react'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function page() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSwitchLoading, setIsSwitchLoading] = useState(false)

  const handleDeleteMessage = (messagesId: string) => {
    setMessages(messages.filter((message) => message._id !== messagesId))
  }

  const { data: session } = useSession()

  const form = useForm({
    resolver: zodResolver(AcceptMessageSchema)
  })

  const { register, watch, setValue } = form

  const acceptMessages = watch('acceptMessages')

  const fetchAcceptMessage = useCallback(async () => {
    setIsSwitchLoading(true)
    try {
      const responce = await axios.get('/api/accept-messages')
      setValue('acceptMessages', responce.data.isAcceptingMesage)
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast.error("Error", {
        description: axiosError.response?.data.message || "Faild to fetch message settings"
      })
    } finally {
      setIsLoading(false)
    }
  }, [setValue])

  const fetchMessages = useCallback(async (refresh: boolean = false) => {
    setIsLoading(true)
    setIsSwitchLoading(false)
    try {
      const responce = await axios.get<ApiResponse>('/api/get-messages')
      setMessages(responce.data.messages || [])
      if (refresh) {
        toast("refreshed masages", {
          description: "showin letest massages"
        })
      }
    } catch (error) {
      console.log();
    }
  }, [])

  return (
    <div>page</div>
  )
}

export default page