import prisma from '../Libs/prismad'

export async function getAllUsers(){
    const allUsers = await prisma.user.findMany()
    return allUsers;
}