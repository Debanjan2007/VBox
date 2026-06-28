import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"

export default async function GET(){
    try {
        const user = await currentUser()
        console.log("user is :",user)
        if(!user){
            return NextResponse.json(
                {
                    success: false,
                    user: user,
                    message: "Got 0 user"
                }
            )
            // redirect("/signup")
        }
        redirect("/dashboard")
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                success: false,
                message: "Fatal! something went wrong"
            }
        )
    }
}