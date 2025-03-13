import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();
export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  await prismaClient.user.create({
    data: {
      username: data.username,
      password: data.password,
      email: data.email,
    },
  });
  return NextResponse.json({ msg: "You have been signed up" });
}
