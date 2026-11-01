"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserItems } from "@/Data/user";
import { toast, Toaster } from "sonner";

const LoginPage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();
  const handleSubmit = () => {
    const userFound = UserItems.find(
      (user) => user.username === username && user.password === password
    );
    if (userFound) {
      toast.success(`berhasil Login! Selamat datang, ${userFound.name}`);
      router.push("/dashboard");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 justify-center items-center">
      <div className="w-100 border border-gray-100 text-black  bg-white shadow-md rounded-[30px] flex flex-col gap-2 p-4 relative justify-center items-center">

        <div className="w-30 h-30 overflow-hidden rounded-full absolute -top-20 border border-gray-100 shadow-md hover:scale-109 duration-500">
          <Image
            src="/images/Avg.jpe"
            alt="logo"
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-center pt-10 pb-5">LOGIN ADMIN</h1>

        <div className="flex flex-col gap-2 relative pb-2">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="pl-25 z-1 p-2 border border-gray-300 2-full
                focus:outline-none focus:border-gray-200 rounded-lg focus:shadow-md transition-all"
          />
          <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">
            Username
          </span>
        </div>


        <div className="flex flex-col gap-2 relative pb-2">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="pl-25 z-1 p-2 border border-gray-300 2-full
                focus:outline-none focus:border-gray-200 rounded-lg focus:shadow-md transition-all"
          />
          <span className="absolute top-0 p-2 z-0 bg-gray-200 rounded-s-lg">
            Password
          </span>
        </div>

        <button
          onClick={handleSubmit}
          className="p-2 w-35 font-semibold bg-blue-800 text-white hover:scale-102 duration-500 hover:bg-blue-500 cursor-pointer rounded-lg"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
