'use client'
import Input from "@/app/components/Input"
import { useState } from "react"
import {signIn} from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

const initialstate = {
    email:"",
    password:""
}
export default function register(){
    const router = useRouter();
    const [state,setState]=useState(initialstate);
    function handleChange(e){
        setState({...state, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        signIn('credentials',{...state , redirect:false}).then((callback)=>{
            if(callback?.error){toast.error(callback.error)}
            if(callback?.ok && ! callback?.error){toast.success('Logged in successfully')}
            setTimeout(()=>{
                router.push('/profile')
                router.refresh();
                
            },100)
        })
       
    }
    return(
    <div>
       <form onSubmit={handleSubmit} className=" w-1/2 pt-20 flex flex-col gap-4 m-auto">
        
         <Input type='email'  name='email' id='email' placeholder='Email'  onChange={handleChange} value={state.email}  />
         <Input type='password'  name='password' id='password' placeholder='Password' onChange={handleChange}  value={state.password}/>
        <button type="submit">Login</button>
        </form>
    </div>
    )
}