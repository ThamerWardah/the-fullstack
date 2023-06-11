'use client'
import Input from "@/app/components/Input"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

const initialstate = {
    name:"",
    email:"",
    password:""
}
export default function register(){
    const [state,setState]=useState(initialstate);
    function handleChange(e){
        setState({...state, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/api/register',state).then(()=>toast.success('User has been registered')).catch(()=>toast.error('Something went wrong!'))
    }
    return(
    <div className="w-screen h-screen">
       <form onSubmit={handleSubmit} className=" w-1/2 pt-20 flex flex-col gap-4 m-auto">
         <Input type='text' name='name' id='name' placeholder='Name'  onChange={handleChange} value={state.name}/>
         <Input type='email'  name='email' id='email' placeholder='Email'  onChange={handleChange} value={state.email}  />
         <Input type='password'  name='password' id='password' placeholder='Password' onChange={handleChange}  value={state.password}/>
        <button type="submit">Register</button>
        </form>
    </div>
    )
}