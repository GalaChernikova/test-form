export default function LoginForm(){
    return (
        <div className="flex flex-col shadow-shadow-grey bg-white rounded-lg border-formBorder border w-[370px] h-[169px] mt-[97px]">
            <form className="w-[310px] h-[79px] mt-[38px] mb-[52px] mx-[30px]">
                <label htmlFor="login" className="text-base mb-[6px] text-lightGreyText">Введите логин</label>
                <input type="text" placeholder="User3" className='w-full h-[54px] placeholder:text-mainText opacity-100 pl-[19px] rounded-lg border border-loginInputBorder focus:outline-none'/>                
            </form>

        </div>
    )
}