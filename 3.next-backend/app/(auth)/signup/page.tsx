"use client";
import { useRef } from "react";
import axios from "axios";

export default function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        try {
            await axios.post("/api/v1/signupPrisma", {
                username: usernameRef.current?.value,
                password: passwordRef.current?.value,
                email: emailRef.current?.value
            });
            console.log("Request sent");
        } catch (e) {
            console.error("Request not sent", e);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="rounded-xl p-5 border w-80">
                <div className="flex justify-center text-3xl font-bold">Signup</div>

                <div className="mt-4">
                    <label className="text-xl">Email</label>
                    <input
                        ref={emailRef}
                        type="email"
                        className="p-2 w-full bg-white rounded text-black outline-none border mt-1"
                        placeholder="example@gmail.com"
                    />
                </div>

                <div className="mt-4">
                    <label className="text-xl">Password</label>
                    <input
                        ref={passwordRef}
                        type="password"
                        className="p-2 w-full bg-white rounded text-black outline-none border mt-1"
                        placeholder="example@123"
                    />
                </div>

                <div className="mt-4">
                    <label className="text-xl">Username</label>
                    <input
                        ref={usernameRef}
                        type="text"
                        className="p-2 w-full bg-white rounded text-black outline-none border mt-1"
                        placeholder="Yash Makkar"
                    />
                </div>

                <div className="flex justify-center items-center mt-6">
                    <button
                        className="border rounded p-2 font-bold text-xl cursor-pointer hover:bg-gray-100"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
