import { getUserById } from "@/app/action/getUserById"
export default async function theUser({params}){
    const theid = params.id
   const user = await getUserById({theid});
    return(
        <div>
            <h1 className="font-bold text-blue-500 px-6  py-2 mt-2">{user.name}</h1>
            <div className="mt-10 flex flex-col gap-2">
                {user.blogs.map((blog)=><div
                 key={blog.id}
                  className="text-center flex flex-col gap-4  border-2 border-blue-500  rounded-2xl px-2 py-4 m-auto w-1/2 ">
          <h1 className="font-bold">{blog.name}</h1>
          <p className="font-semiblog text-gray-500">{blog.description}</p>
        </div>
            )}
            </div>
        </div>
    )
}