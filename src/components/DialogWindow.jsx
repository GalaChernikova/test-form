import InboxMessage from "./InboxMessage";
import MessageItem from "./MessageItem";

export default function MessageWindowGeneral(){
    return(
        <div className="flex flex-col w-full h-[503px] bg-white mt-[31px] border-y-borderLine border-y">
            <div className="overflow-y-scroll h-[389px]  mt-[28px] mr-[11px]">
                <InboxMessage />
                <MessageItem />
            </div>

        </div>
    )
}