import Link from "next/link";

export default function Loading() {
  return (
    <div className="flex  justify-center items-center text-lg w-screen h-screen ">
      Todo Application
      <div className="gap-1">
        <Link href={"/signup"} className="text-md border m-1">
          SignUp
        </Link>
        <Link href={"/signin"} className="text-md border m-1">
          Signin
        </Link>
      </div>
    </div>
  )

}