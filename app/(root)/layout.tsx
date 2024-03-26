import { NavBar } from "@/components/navBar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";


const RootLayout= async ({
    children

} : {
    children: React.ReactNode;
})=>{

    const isPro = await checkSubscription()
    return(
        <div className="h-full">
            <NavBar isPro={isPro}></NavBar>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed insert-y-0">
                <Sidebar isPro={isPro}></Sidebar>
            </div>

            <main className="md:pl-20 pt-16 h-full">
              {children}
            </main>
        </div>
    )
    }
    export default RootLayout;