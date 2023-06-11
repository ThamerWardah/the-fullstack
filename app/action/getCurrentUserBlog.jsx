import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from '../Libs/prismad';

async function getSession(){
    return await getServerSession(authOptions);
}

export async function currentUserBlogs(){

    
    const session = await getSession();
    if (!session?.user?.email){return null}

    const theCurrentUser = await prisma.user.findUnique({
        where:{
            email:session?.user?.email 
        },
        include:{blogs:true}
    });

    return theCurrentUser
}


