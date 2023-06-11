import prisma from '../../../Libs/prismad';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';


export const  authOptions ={
    adapter:PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{type:'email'},
                password:{label:'Passwrod',placeholder:'Password',type:'password'}
            },
            async authorize(credentials){
                if(!credentials.email || ! credentials.password){throw new Error("Password and email are required")}

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                });

                if(!user){throw new Error('No such user found')}

                const matchPassword = await bcrypt.compare(credentials.password , user.hashedPassword);

                if(!matchPassword){throw new Error("Incorrect password")}
                
                return user
            }
        })
    ],

    secret:process.env.SECRET,

    session:{
        strategy:"jwt"
    },

    debug : process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}