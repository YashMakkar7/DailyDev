export default function Signin(){
    return <div className="w-screen h-screen items-center flex justify-center">
        <div className="rounded-xl p-5 border">
            <div className="flex justify-center text-3xl p-0.5 font-bold">
                Signin
            </div>
            <LabeledInput text="Email" type="text" placeholder="example@gmail.com"></LabeledInput>
            <LabeledInput text="Password" type="password" placeholder="example@123"></LabeledInput>
            
        </div>
    </div>
}
interface labelI {
    type : string,
    text : string,
    placeholder: string
}
const LabeledInput = ({type,text,placeholder}:labelI) => {
    return <div className="mt-4">
        <div className="text-xl">
            {text}:
        </div>
        <div className="bg-white rounded p-2 text-black">
            <input type={type} placeholder={placeholder}/>
        </div>
    </div>
}
