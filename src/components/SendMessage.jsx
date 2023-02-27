import { addMessage } from "../redux/sendMessageSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import sendMessageImg from "./../images/carbon_send.svg";

export default function SendMessage() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addMessage({
            messageText: value,
        })
      );
    }
  };

  return (
    <div>
      <form
        className="flex items-center rounded-lg w-[506px] h-[54px] mt-[36px] mb-[35px] mx-[32px] bg-white border-formBorder border"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Соообщение "
          className="w-full h-full placeholder:text-mainText opacity-100 pl-[18px] rounded-lg  focus:outline-none"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">
          <img src={sendMessageImg} alt="send_icon" className="pr-[14px]" />
        </button>
      </form>
    </div>
  );
}
