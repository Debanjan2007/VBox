import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function GET(){
    let shouldRedirectTosignUp = false
    try {
        const user = await currentUser()
        console.log("user is :",user)
        if(!user){
            shouldRedirectTosignUp = true
        }
    } catch (error) {
        console.log(error)
        shouldRedirectTosignUp = true
    }

    if(shouldRedirectTosignUp){
        redirect("/signup")
    }else{
        redirect("/dashboard")
    }
}