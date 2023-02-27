import { useDispatch, useSelector } from "react-redux";
import { deleteInbox } from "../redux/inboxSlice";
import deleteMessage from "./../images/clarity_close-line.svg";

export default function InboxMessage({
  id,
  inboxUserName,
  inboxMessageText,
  inboxTime,
}) {
  const inboxMessages = useSelector((state) => state.inbox);
  const dispatch = useDispatch();

  const handleDeleteInboxMessage = () => {
    dispatch(deleteInbox({ id }));
  };

  return (
    <div>
      {inboxMessages.map((inbox) => {
        return (
          <div className="flex flex-col mt-[28px] ml-[32px]" key={inbox.id}>
            <p className="text-base text-lightGreyText mb-[6px]">
              {inbox.inboxUserName}
            </p>
            <div className="flex">
              <div className="flex flex-col justify-center bg-grey-bg rounded-lg w-[329px] min-h-[52px] px-[17px] relative">
                <p className="text-base text-mainText">
                  {inbox.inboxMessageText}
                </p>
                <p className="absolute bottom-0 right-0 mb-[6px] mr-[6px] text-timeColor text-[13px] leading-[15px]">
                  {inbox.inboxTime}
                </p>
              </div>

              <button
                type="submit"
                className="w-[18px] h-[18px] ml-[4px]"
                onClick={handleDeleteInboxMessage}
                onSubmit={handleDeleteInboxMessage}
              >
                <img src={deleteMessage} alt="delete_message" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
