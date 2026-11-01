"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { ReactNode, useState } from "react";
type Props ={
    children: ReactNode;
}

const Header = ({children}:Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    toast.success("Berhasil keluar dari akun!");
    router.push("/Login");
  };
  return (
    <div className="bg-[#fffcf7] w-full h-screen">
      <main>
        <header className="bg-white border-2 border-gray-200 sticky top-0 z-50 item-center p-5">
          <div className="container mx-auto px-14 py-3 flex flex-row justify-between items-center">
            <div className="flex item-center gap-6">
              <nav className="hidden md:flex flex-row gap-6 font-semibold text-gray-500 text-[17px]">
                <Link
                  href="/dashboard"
                  className="hover:text-gray-900 transition duration-300">
                  Dashboard
                </Link>
                <Link
                  href="/domain"
                  className="hover:text-gray-900 transition duration-300">
                  Domain saya
                </Link>
                <Link
                  href="/hosting"
                  className="hover:text-gray-900 transition duration-300">
                  Hosting
                </Link>
                <Link
                  href="/billing"
                  className="hover:text-gray-900 transition duration-300">
                  Tagihan
                </Link>
              </nav>
            </div>
            {/* User Profile & Logout */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                     <p className="text-sm font-bold text-gray-800">User</p>
                 <p className="text-xs text-emerald-600 font-medium">Member premium</p>
                 </div>
              <button
                onClick={handleLogout}
                className="bg-[#fa8484] hover:bg-[#ff5555] hover:text-white duration-500 text-red-700 font-bold py-2 px-4 rounded-[10px] transition-all">
                Logout
              </button>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 flex md:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </button>

            </div>
          </div>
          <nav className={`${isOpen ? 'flex' : 'hidden'} md:hidden gap-6 text-sm font-semibold text-gray-500 text-[17px] px-14 py-4 justify-center`}>
                <Link
                  href="/dashboard"
                  className="hover:text-gray-900 transition duration-300">
                  Dashboard
                </Link>
                <Link
                  href="/domain"
                  className="hover:text-gray-900 transition duration-300">
                  Domain saya
                </Link>
                <Link
                  href="/hosting"
                  className="hover:text-gray-900 transition duration-300">
                  Hosting
                </Link>
                <Link
                  href="/billing"
                  className="hover:text-gray-900 transition duration-300">
                  Tagihan
                </Link>
              </nav>
              </div>
        </header>

      </main>
      <main className="container mx-auto px-14 py-8 space-y-8">
        {children}
      </main>
    </div>
  );
};
 export default Header;