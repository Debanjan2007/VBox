import { currentUser, auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { User } from "@/models/User.model"
import { dbConnect } from "@/utils/db.connect"

await dbConnect()
export default async function GET() {
    let shouldRedirectToLogin = false
    try {
        const userId = await auth()
        console.log(userId.userId);
        const user = await User.findOne({
            clerkUid: userId?.userId
        })
        console.log(user);
        if (user) {
            await User.updateOne({
                clerkUid: userId?.userId
            }, {
                $set: {
                    isLogedin: true
                }
            })
            shouldRedirectToLogin = false
        } else {
            shouldRedirectToLogin = true
        }
    } catch (error) {
        console.log(`Error occured : ${error.message}`);
        shouldRedirectToLogin = true

    }
    if (shouldRedirectToLogin) {
        redirect("/login")
    } else {
        redirect("/dashboard")
    }
}