import axios from 'axios'

export default async function User() {
    const response = await axios.get("http:localhost:3000//api/v1/user/details")
    const data = response.data
    await new Promise(r=> setTimeout(r,2000))
    return <div className='flex items-center justify-center w-screen h-screen'>
        <div className='p-4 border rounded text-2xl'>
            <div>
                Name : {data.user}
            </div>
            <div>
                Email : {data.email}
            </div>
        </div>

    </div>
}