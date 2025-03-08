import Link from "next/link"

export default function Home() {
  return <div className="flex w-screen h-screen justify-center items-center">
    <div className="p-4 border rounded">
      <div className="text-2xl">
        Todo Application
      </div>
      <div className="flex justify-between text-xl font-bold mt-2">
        <Link href="/signup">
          <Button>Signup</Button>
        </Link>
        <Link href="/signin">
          <Button>Signin</Button>
        </Link>
      </div>
    </div>
  </div>
}

interface Props {
  children: React.ReactNode
}
function Button({ children }: Props) {
  return <div className="p-2 border rounded">
    {children}
  </div>
}