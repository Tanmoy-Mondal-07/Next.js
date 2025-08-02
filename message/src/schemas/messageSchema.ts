import { z } from 'zod'

export const messageSchema = z.object({
    content: z
        .string()
        .min(1, { message: 'Write Somthing' })
        .max(300, { message: 'message too long' })
})