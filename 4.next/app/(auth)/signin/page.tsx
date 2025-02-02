export default function Signin() {
    return <div className="flex justify-center items-center h-screen  ">
        <div className="border p-4 rounded-xl">
            <div className="font-semibold text-2xl flex justify-center">
                Signin
            </div>
            <div>
                <div>
                    <input type="text" className="rounded text-gray-900 mt-2.5 p-2" placeholder="Username" />
                </div>
                <div>
                    <input type="password" className="rounded text-gray-900 mt-2.5 p-2" placeholder="Password" />
                </div>
                <div className="flex justify-center">
                    <button className="bg-white text-gray-900 rounded mt-2.5 font-bold p-1" >Signin</button>
                </div>
            </div>
        </div>

    </div>
}