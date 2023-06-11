import { NextResponse } from "next/server";
import prisma from '../../Libs/prismad'
import { currentUser } from "@/app/action/getCurrentUser";

export async function POST(request){
    const body = await request.json();
    const {name , description} = body;
    const user = await currentUser();
    const userId = await user.id
    
    const blog = await prisma.blog.create({
        data:{
            name,
            description,
            userId
        }
    })
    return NextResponse.json(blog)
}