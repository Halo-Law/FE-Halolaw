import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";

function Login(){
    const router = useRouter()
    const handleLogin = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return(
        <div className="flex w-screen h-auto font-['Inter']">
            <div className="w-full md:w-1/2 mx-[25px] md:mx-0 flex justify-center items-center h-auto md:h-screen">
                <div className="pt-8 md:pt-0">
                    <p className="text-[33px] font-[700] leading-[40px] tracking-[0.25px] pb-[40px]">Login</p>
                    <form action="#" className="space-y-[16px]">
                        <div className="">
                            <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">Email <span className="text-[#3A57E8]">*</span></label>
                            <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="email" placeholder="mail@gmail.com"></input>
                        </div>
                        <div className="">
                            <label className="text-sm font-medium text-gray-700 tracking-wide pb-2">Password <span className="text-[#3A57E8]">*</span></label>
                            <input className=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A57E8]" type="password" placeholder="***********"></input>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"></input>
                                <label for="remember_me" className="ml-2 block text-sm text-gray-800">Remember me</label>
                            </div>
                            <a href="#" className="font-[600] text-sm text-gray-800">Lupa Password ?</a>
                            
                        </div>
                        <div className="pt-[40px] pb-4">
                            <button type="submit" className="w-full flex justify-center bg-[#3A57E8] text-gray-100 p-3 rounded-[8px] tracking-wide font-semibold cursor-pointer" onClick={(e) => {handleLogin(e)}}>
                            Masuk
                            </button>
                        </div>
                    </form>
                    <button className="bg-white border-2 rounded-[8px] w-full py-[12px] flex justify-center font-[700] text-[#475467]"><img src="/google.svg" className="flex self-center h-auto pr-2"/>Sign up with Google</button>
                    <p className="text-sm mt-[40px]">Belum memiliki akun? <Link href="/daftar"><span className="text-[#2A41C7] font-[600] cursor-pointer">Daftar</span></Link></p>
                </div>
            </div>
            <div className="hidden lg:block w-1/2 h-screen bg-[url('/login.png')] bg-cover">
            </div>
        </div>   
    )
}

export default Login;