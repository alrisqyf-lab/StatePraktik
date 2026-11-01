'use client'
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header";

export default function Home() {
  const [name, setName] = useState('Budi Hartanto')
  const handleChange = () =>{
    alert(`nama saya adalah ${name}`);
  }
  return (
    <Header>
      <div className="p-15 bg-white w-full h-100">
      <h1 className="text-3xl text-red-500 font-extrabold">Hallo Dunia</h1>
      <p className="py-3 text-black">My name is {name}</p>
      <input type="text" className="text-black bg-gray-200 border-1 border-black rounded-[5px]" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleChange} className="border-1 border-black text-black p-1 rounded-[5px] cursor-pointer hover:scale-130 duration-400">Change Name</button>
   </div>
    </Header>
   
  );
}
