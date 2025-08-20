import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";

export async function POST(request: Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)
    const user: User = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: "Not Authenticated"
        }, { status: 401 })
    }

    const userId = user._id
    const { acceptMessages } = await request.json()

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                isAcceptingMesage: acceptMessages
            },
            { new: true }
        )

        if (!updatedUser) {
            return Response.json({
                success: false,
                message: "failed to update accpet messages status"
            }, { status: 401 })
        }

        return Response.json({
            success: true,
            message: "messages status updated"
        }, { status: 500 })

    } catch (error) {
        console.log("failed to update accpet messages");
        return Response.json({
            success: false,
            message: "failed to update accpet messages status"
        }, { status: 500 })
    }
}

export async function GET(request: Request) {

}