import NextAuth from "next-auth/next";
import nextAuth from "next-auth/next";


const handler = NextAuth({
    session : {
        strategy : 'jwt'
    },
    providers : [

    ],


    // tell here directory which page we login, register
    pages : [

    ]
})


export {handler as GET, handler as POST}


