import prismadb from "@/lib/prismadb";
import { InflowchatForm } from "./components/inflowchatForm";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface InflowChatIdPageProps {
    params: {
        inflowchatId: string;
    }
}


const InflowChatIdPage = async ({
    params 
}: InflowChatIdPageProps) => {

    const {userId} = auth()
    //TODO : Check subscription 

    if (!userId){
        return redirectToSignIn()
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.inflowchatId,
            userId
        }
    })

    const categories = await prismadb.category.findMany();

    return(
        <div>
            <InflowchatForm
            initialData={companion}
            categories = {categories}
             />
        </div>
    )
}
export default InflowChatIdPage;