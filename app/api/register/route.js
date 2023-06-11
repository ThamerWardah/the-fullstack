import prisma from '../../Libs/prismad'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server';

export async function POST(request){
    const body = await request.json();
    const {name , email , password} = body

    const hashedPassword = await bcrypt.hash(password ,10)

    const exist = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(exist){ throw new Error('User is alredy exists')}
    const user = await prisma.user.create({
        data:{
            name,
            email,
            hashedPassword
        }
    })

    return NextResponse.json(user)
}