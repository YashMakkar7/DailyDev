import axios from "axios"

export default async function Profile() {
    const res = await axios.get("/api/profile", {
        headers: {
            authorization: localStorage.getItem("token")
        }
    })
    const profile = res.data.avatarUrl

    return <div>
        {profile}
    </div>
}