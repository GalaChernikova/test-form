import InboxMessage from "./InboxMessage";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";

export default function MessageWindowGeneral() {
  const inboxMessagesAll = useSelector((state) => state.inboxMessages);
  const sendMessagesAll = useSelector((state) => state.sendMessages);

  return (
    <div className="flex flex-col w-full h-[503px] bg-white mt-[31px] border-y-borderLine border-y">
      <div className="overflow-y-scroll h-[389px]  mt-[28px] mr-[11px]">
        {inboxMessagesAll.map((inbox) => {
          return (
            <div key={inbox.id}>
              <InboxMessage
                id={inbox.id}
                inboxUserName={inbox.inboxUserName}
                inboxMessageText={inbox.inboxMessageText}
                inboxTime={inbox.inboxTime}
              />
            </div>
          );
        })}

        {sendMessagesAll.map((send) => {
          return (
            <div key={sendMessagesAll.id}>
              <MessageItem
                id={send.id}
                messageUserName={send.messageUserName}
                messageText={send.messageText}
                messageTime={send.messageTime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
