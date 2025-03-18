"use client"
import axios from "axios"

export default function(){
    return <div>
        Signin Page
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password" />
        <button onClick={
            async() => {
                const res = await axios.post("/api/signin",{
                    username:"yash",
                    password:"123123"
                })
                localStorage.setItem("token",res.data.token)
            }
        }>Signin</button>
    </div>
}