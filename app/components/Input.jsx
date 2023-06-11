'use client'

export default function Input({type ,name, value , placeholder , onChange ,id}){

    return(
        <input
            type={type} 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            name={name}
            className="px-4 py-1 rounded-2xl outline-none text-black border-2 focus:border-green-400"
        />
    )
}