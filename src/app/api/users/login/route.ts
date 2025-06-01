import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'

connect()

interface tokenData {
    id: String
    username: String
    email: String
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody
        console.log(reqBody);

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "user dosent exist plzz signup" }, { status: 400 })
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "invalid password" }, { status: 400 })
        }
        // create token data
        const tokenData: tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //creat token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

        const responce = NextResponse.json({
            message: "login successfuly",
            success: true
        })
        responce.cookies.set("token", token, { httpOnly: true })

        return responce;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}