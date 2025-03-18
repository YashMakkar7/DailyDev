import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Emial",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "yash@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                console.log({
                    username, password
                })
                // db request to check this username and password is correct 
                const user = { id: "1", name: "yashMakkar", email: "yashmakkar777@gmail.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
    , secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }