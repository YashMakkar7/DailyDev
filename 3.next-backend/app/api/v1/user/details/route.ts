import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Yash Makkar",
    email: "yashmakkar777@gmail.com",
  });
}
