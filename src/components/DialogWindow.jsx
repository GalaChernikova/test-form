import InboxMessage from "./InboxMessage";

export default function MessageWindowGeneral(){
    return(
        <div className="flex flex-col w-full h-[503px] bg-white mt-[31px] border-y-borderLine border-y">
            <InboxMessage />
        </div>
    )
}