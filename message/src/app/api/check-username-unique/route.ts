import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { success, z } from "zod"
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request) {
    await dbConnect()

    try {
        const { searchParams } = new URL(request.url)
        const queryParam = {
            username: searchParams.get('username')
        }

        //validet with zod
        const result = UsernameQuerySchema.safeParse(queryParam)

    } catch (error) {
        console.log("Error while checking username :: ", error);
        return Response.json({
            success: false,
            message: "Error checking username"
        }, { status: 500 })
    }
}