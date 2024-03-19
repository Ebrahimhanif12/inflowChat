import { NavBar } from "@/components/navBar";
import { Sidebar } from "@/components/sidebar";


const RootLayout=({
    children

} : {
    children: React.ReactNode;
})=>{
    return(
        <div className="h-full">
            <NavBar></NavBar>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed insert-y-0">
                <Sidebar></Sidebar>
            </div>

            <main className="md:pl-20 pt-16 h-full">
              {children}
            </main>
        </div>
    )
    }
    export default RootLayout;