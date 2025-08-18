import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
    await dbConnect()

    try {
        
    } catch (error) {
        console.log("Error while verifing user :: ", error);
        return Response.json({
            success: false,
            message: "Error while verifing user"
        }, { status: 500 })
    }
}