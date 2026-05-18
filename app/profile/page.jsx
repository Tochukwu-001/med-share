import { auth } from "@/auth"
import ProfileClient from "./profile"

export default async function ProfilePage() {
    const session = await auth()
    return (
        <main>
            <ProfileClient session={session}/>
        </main>
    )
}
