const ChatLayout = ({
    children
}: { children: React.ReactNode;
}) =>{
    return(
        <div className="mx-auto mx-w-4xl h-full w-full">
            {children}
        </div>
    ) 
}
export default ChatLayout;