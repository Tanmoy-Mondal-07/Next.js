import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { Message } from "@/model/User";

export async function POST(request: Request) {
    await dbConnect()

    const { username, content } = await request.json()
    try {
        const user = await UserModel.findOne({ username })

        if (!user) {
            return Response.json({
                success: false,
                message: "User not found"
            }, { status: 404 })
        }

        if (!user.isAcceptingMesage) {
            return Response.json({
                success: false,
                message: "User is not accepting the messages"
            }, { status: 403 })
        }
    } catch (error) {

    }
}