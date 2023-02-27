import { deleteMessage } from "../redux/sendMessageSlice";
import { useDispatch } from "react-redux";
import deleteMessageImg from "./../images/clarity_close-line.svg";

export default function MessageItem({
  id,
  messageUserName,
  messageText,
  messageTime,
}) {
  const dispatch = useDispatch();

  const handleDeleteMessage = () => {
    dispatch(deleteMessage({ id }));
  };

  return (
    <div className="flex flex-col mt-[28px] ml-[32px]" key={id}>
      <p className="text-base text-lightGreyText mb-[6px]">{messageUserName}</p>
      <div className="flex">
        <div className="flex flex-col justify-center bg-grey-bg rounded-lg w-[329px] min-h-[52px] px-[17px] relative">
          <p className="text-base text-mainText">{messageText}</p>
          <p className="absolute bottom-0 right-0 mb-[6px] mr-[6px] text-timeColor text-[13px] leading-[15px]">
            {messageTime}
          </p>
        </div>

        <button
          type="submit"
          className="w-[18px] h-[18px] ml-[4px]"
          onClick={handleDeleteMessage}
          onSubmit={handleDeleteMessage}
        >
          <img src={deleteMessageImg} alt="delete_message" />
        </button>
      </div>
    </div>
  );
}
