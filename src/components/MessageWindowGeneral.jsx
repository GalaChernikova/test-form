import DialogWindow from './DialogWindow'
import SendMessage from './SendMessage'

export default function MessageWindowGeneral(){
    return(
        <div className="flex flex-col w-[570px] h-[628px] rounded-lg bg-grey-bg  shadow-shadow-grey border-borderLine border mt-[76px] mr-[130px] mb-[124px] ml-[175px]">
            <DialogWindow />
            <SendMessage />
        </div>
    )
}