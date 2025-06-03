import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import { sendEmail } from "@/helpers/maler"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { password, email, username } = reqBody
        console.log(reqBody)
        const user = await User.findOne({ email })
        if (user) {
            console.log("user alrady exist");
            return NextResponse.json({ error: "user alrady exist" }, { status: 500 }) 
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser);

        //send email
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "user created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}