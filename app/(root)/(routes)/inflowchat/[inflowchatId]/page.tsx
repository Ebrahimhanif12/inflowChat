import prismadb from "@/lib/prismadb";
import { InflowchatForm } from "./components/inflowchatForm";

interface InflowChatIdPageProps {
    params: {
        inflowchatId: string;
    }
}


const InflowChatIdPage = async ({
    params 
}: InflowChatIdPageProps) => {
    //TODO : Check subscription 

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.inflowchatId,
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