import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

// Define users array before using it in the authorize function
const users = [
    {
        id: 1,
        name: 'a',
        email: 'abc@gmail.com',
        password: 'password'
    },
    {
        id: 2,
        name: 'b',
        email: 'bcd@gmail.com',
        password: 'password'
    },
]

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { 
                    label: 'Email', 
                    type: "text", 
                    required: true, 
                    placeholder: "Your email" 
                },
                password: { 
                    label: 'Password', 
                    type: "password", 
                    required: true, 
                    placeholder: "Enter Password" 
                }
            },
            async authorize(credentials) {
                // Ensure credentials are provided
                if (!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                // Find user by email
                const currentUser = users.find((user) => user.email === email);

                if (currentUser && currentUser.password === password) {
                    return currentUser;
                }

                return null;
            }
        })
    ],
    // Define pages as an object, not an array
    // pages: {
    //     signIn: '/auth/signin',  // Example: define custom sign-in page
    //     error: '/auth/error'  // Example: define custom error page
    // }
});

export { handler as GET, handler as POST }
