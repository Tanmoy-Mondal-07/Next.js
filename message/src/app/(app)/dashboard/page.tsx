'use client'
import { Message } from '@/model/User'
import { AcceptMessageSchema } from '@/schemas/acceptMessageSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

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

    }
  }, [setValue])

  return (
    <div>page</div>
  )
}

export default page