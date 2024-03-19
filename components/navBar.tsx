import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { Menu, Sparkle } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { MobileSidebar } from "./mobile-sidebar"

const font = Poppins({
    weight: "600",
    subsets: ["latin"]

})

export const NavBar = () =>{
    return(
        <div className="fixed w-full z-50 flex justify-between ms-center py-2 px-4 border-b bprder-primary/10 bg-secondary h-16">
            <div className="flex item-center">
                <MobileSidebar></MobileSidebar>
                <Link href="/">
                    <h1 className= {cn("hidden md:block text-sl md:text-3xl font-bold text-primary", font.className)}>
                    InflowChat
                    </h1>
                </Link>

            </div>
            <div className="flex item-center gap-x-3">
                <Button size="sm" variant="premium">
                    Upgrade
                    <Sparkle className="h-4 w-4 fill-white text-white ml-2"></Sparkle>
                </Button>
                <ModeToggle></ModeToggle>
                <UserButton></UserButton>
            </div>
            
        </div>
    )
}