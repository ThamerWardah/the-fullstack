import Link from "next/link";
import { currentUserBlogs } from "@/app/action/getCurrentUserBlog";
export default async function Profile(){
    const user = await currentUserBlogs();
    return(
        <>
        {!user ? <div className="w-full h-full text-center flex pt-20 text-red-500 font-blod"><Link href='/login' className="animate-pulse m-auto">You need to sing in first </Link></div>:
        <div className="w-full h-full flex flex-col gap-4 text-center mt-10  ">
            {user.blogs.map((blog)=><div key={blog.id} className="w-2/3 border-2  m-auto border-blue-600 rounded-2xl pt-2 bg-slate-100 shadow-xl" >
              <h1 className="font-bold">{blog.name}</h1>
              <p className="font-sm text-gray-400 p-4">{blog.description}</p>
                </div>)}
        </div>}
        </>
    )
}