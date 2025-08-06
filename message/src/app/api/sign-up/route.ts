import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, email, password } = await request.json()
        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (existingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "username is alredy taken"
            }, { status: 400 })
        }

        const existingUserByEmail = await UserModel.findOne({
            email
        })

        if (existingUserByEmail) {
            true//todo
        } else {
            const hasedPassword = await bcrypt.hash(password, 10)
        }

    } catch (error) {
        console.log('error regestring user :: ', error);
        return Response.json(
            {
                success: false,
                message: 'Error registring user'
            }, {
            status: 500
        }
        )
    }
}