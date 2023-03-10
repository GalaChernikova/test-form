import { useDispatch, useSelector } from "react-redux";
import { deleteInbox } from "../redux/inboxSlice";
import deleteMessageImg from "./../images/clarity_close-line.svg";

export default function InboxMessage({
  id,
  inboxUserName,
  inboxMessageText,
  inboxTime,
}) {
  const dispatch = useDispatch();

  const handleDeleteInboxMessage = () => {
    dispatch(deleteInbox({ id }));
  };

  return (
    <div className="flex flex-col ml-[32px]" key={id}>
      <p className="text-base text-lightGreyText mb-[6px]">
        {inboxUserName}
      </p>
      <div className="flex">
        <div className="flex flex-col justify-center bg-grey-bg rounded-lg w-[329px] min-h-[52px] px-[17px] relative">
          <p className="text-base text-mainText">{inboxMessageText}</p>
          <p className="absolute bottom-0 right-0 mb-[6px] mr-[6px] text-timeColor text-[13px] leading-[15px]">
            {inboxTime}
          </p>
        </div>

        <button
          type="submit"
          className="w-[18px] h-[18px] ml-[4px]"
          onClick={handleDeleteInboxMessage}
          onSubmit={handleDeleteInboxMessage}
        >
          <img src={deleteMessageImg} alt="delete_message" />
        </button>
      </div>
    </div>
  );
}
