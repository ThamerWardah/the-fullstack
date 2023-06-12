'use client'
import { signOut} from "next-auth/react"
import Link from "next/link"
export default function Nav({user}){
    return(
        <nav className="flex px-8 py-4 justify-between bg-slate-700 shadow-xl text-white text-sm">
            <h1 className="font-mono text-xl text-green-300 font-bold">{user?.name}</h1>
            <div className="flex gap-2 text-sm">
                <Link className="border-2 border-slate-500 rounded-full px-2 hover:bg-slate-600" href='/'>Home</Link>
                {user ? <Link className="border-2 border-slate-500 rounded-full px-2 hover:bg-slate-600" href='/create'>Create</Link>:
                <Link className="border-2 border-slate-500 rounded-full px-2 hover:bg-slate-600" href='/register'>Register</Link>}
                {user ? <button className="border-2 border-slate-500 rounded-full px-2 hover:bg-slate-600" onClick={()=>signOut()}>Sign out</button> :<Link className="border-2 border-slate-500 rounded-full px-2 hover:bg-slate-600" href='/login'>Sign in</Link>
                }
            </div>
        </nav>
    )
}