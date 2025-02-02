"use client"
import axios from "axios";
import { ChangeEventHandler, useRef, useState } from "react"

export default function Signup() {
    // other way is using refs
    const username = useRef("");
    const password = useRef("");
    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="border-2 p-2 rounded-lg">
            <div className="flex text-gray-50 text-xl font-semibold items-center justify-center ">Signup</div>
            <LabelledInput label="Username" placeholder="ex-ABC" onChange={(e) => {
                username.current = e.target.value;
            }} />
            <LabelledInput label="Password" placeholder="ex-abc@849422" type="password" onChange={(e) => {
                password.current = e.target.value;
            }} />
            <div className="flex justify-center items-center">
                <button className="text-black bg-gray-50 rounded-lg p-2 mt-4 " onClick={async() => {
                    await axios.post("http://localhost:3000/api/v1/signup", {
                        username: username.current,
                        password: password.current
                    })
                }}>Signup</button>
            </div>
        </div>
    </div>
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <div className="text-small text-white mb-2 pt-4 font-semibold block">{label}</div>
        <input type={type || "text"} placeholder={placeholder} onChange={onChange} className="bg-gray-50 border text-gray-900 text-sm rounded-lg w-full block p-2.5" />
    </div>
}
interface LabelledInputType {
    label: string,
    placeholder: string,
    type?: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}