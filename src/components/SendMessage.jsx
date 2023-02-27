import sendMessageImg from './../images/carbon_send.svg'

export default function SendMessage(){
    return(
        <div>
            <form className='flex items-center rounded-lg w-[506px] h-[54px] mt-[36px] mb-[35px] mx-[32px] bg-white border-formBorder border'>
                <input type="text" placeholder="Соообщение " className='w-full h-full placeholder:text-mainText opacity-100 pl-[18px] rounded-lg  focus:outline-none'/>
                <button>
                    <img src={sendMessageImg} alt="send_icon" className='pr-[14px]'/>
                </button>
            </form>
        </div>
    )
}