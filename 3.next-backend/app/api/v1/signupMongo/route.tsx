import dbConnect from "@/app/libMongo/dbConnect";
import { userModel } from "@/app/libMongo/dbSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json()
    console.log(data);
    await dbConnect();
    try {
        await userModel.create({
            username: data.username,
            email: data.email,
            password: data.password
        })
        console.log("User Entry Created")

    } catch (e) {
        console.log("There is an error occured while putting the data", e)
    }

    return NextResponse.json({
        msg: "You are Signed up "
    })
}