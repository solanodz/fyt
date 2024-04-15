import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = {
                    id: 1,
                    fullName: "John Doe",
                    email: "johndoe@mail.com",
                }
                return user;
            }
        })
    ]
})

export { handler as GET, handler as POST }