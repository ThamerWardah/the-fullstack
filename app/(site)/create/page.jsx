

'use client'
import Input from "@/app/components/Input"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import axios from "axios"

const initialstate = {
    name:"",
    description:""
}
export default function register(){
    const router = useRouter();
    const [state,setState]=useState(initialstate);

    function handleChange(e){
        setState({...state, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/api/create',state).then(()=>alert('Blog has been published')).catch(()=>alert("Something wrong happen with your blog"))
    
    }
    return(
    <div>
       <form onSubmit={handleSubmit} className=" w-1/2 pt-20 flex flex-col gap-4 m-auto">
       
         <Input type='text'  name='name' id='name' placeholder='Name'  onChange={handleChange} value={state.name}  />
         <Input type='text'  name='description' id='description' placeholder='Description' onChange={handleChange}  value={state.description}/>
        <button type="submit">Post</button>
      
        </form>
    </div>
    )
}