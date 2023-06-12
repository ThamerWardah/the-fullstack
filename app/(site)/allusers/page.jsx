import { getAllUsers } from "@/app/action/getAllUsers";
import Link from "next/link";
import { currentUser } from "@/app/action/getCurrentUser";
export default async function allusers(){
    const current = await currentUser();
    const allUsers = await getAllUsers();
    const allUsersButCurrent = allUsers.filter((user)=>{
        return user?.email !== (current?.email  )
    })

    return(
        <div className="flex flex-col gap-4 mt-10">
            {allUsersButCurrent.map((user)=><div key={user.id} className=" w-1/3 mx-auto  text-center  px-4 py-2 rounded-2xl bg-gray-200 shadow-lg font-bold active:bg-green-300">
                <h1 className="hover:text-blue-400"><Link href={`/user/${user.id}`}>{user.name}</Link></h1>
            </div>)}
        </div>
    )
} 