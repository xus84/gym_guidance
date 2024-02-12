import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
          
            async authorize(credentials, req) {
                console.log(credentials)
                await connect();

                const userFound = await User.findOne({email: credentials?.email}).select('+password');
                if (!userFound) throw new Error("Invalid credentials")
                console.log(userFound)

                const passwordMatch = await bcrypt.compare(credentials.password, userFound.password)
                if(!passwordMatch) throw new Error("Invalid credentials")

               

                return  userFound  
            }
        })
    ],
    callbacks: {
        jwt({account, token, user, profile, session}){
            if(user) token.user = user;
            return token;
        },
        session({session, token}){
            session.user = token.user;
            return session;
        }
    },
    pages: {
       signIn: '/login' 
    }
})

export { handler as GET, handler as POST };