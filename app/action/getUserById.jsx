import prisma from '../Libs/prismad';

export async function getUserById({theid}){
    if(!theid){return null}
return theuser(theid)
}


 async function theuser(theid){
    const user = await prisma.user.findUnique({
        where:{
            id:theid
        },
        include:{blogs:true}
    })
    return user
}