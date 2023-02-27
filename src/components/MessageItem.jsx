import { deleteMessage } from "../redux/sendMessageSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteMessageImg from "./../images/clarity_close-line.svg";

export default function MessageItem({id}) {
  const sendMessagesAll = useSelector((state) => state.sendMessages);
  const dispatch = useDispatch();

  const handleDeleteMessage = () => {
    dispatch(deleteMessage({ id }));
  };

  return (
    <div>
      <div>
        {sendMessagesAll.map((send) => {
          return (
            <div className="flex flex-col mt-[28px] ml-[32px]" key={send.id}>
              <p className="text-base text-lightGreyText mb-[6px]">
                {send.messageUserName}
              </p>
              <div className="flex">
                <div className="flex flex-col justify-center bg-grey-bg rounded-lg w-[329px] min-h-[52px] px-[17px] relative">
                  <p className="text-base text-mainText">{send.messageText}</p>
                  <p className="absolute bottom-0 right-0 mb-[6px] mr-[6px] text-timeColor text-[13px] leading-[15px]">
                    {send.messageTime}
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
        })}
      </div>
    </div>
  );
}
