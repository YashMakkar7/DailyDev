import { NextResponse, userAgent } from "next/server";

export function GET(){
    return NextResponse.json({
        user : "Yash Makkar",
        email : "yashmakkar777@gmail.com"
    })
}
export function POST(){
    return NextResponse.json({
        user : "hello ji "
    })
}