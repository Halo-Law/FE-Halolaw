import {react, Fragment, useState} from "react";
import { Menu, Transition } from '@headlessui/react'
import Image from "next/image";
import Link from "next/link"
import { useRouter } from 'next/router'

function Navbar(){
    const nama = "Farizi"
    const url_img = "/avatardummy.png"
    const router = useRouter()


    const [login, setLogin] = useState(true)

    return(
        <>
            <nav className="font-['Open Sans'] text-[#475467] font-[500] text-[14px] bg-white shadow-lg">
                <div className="flex justify-between bg-white lg:mx-[100px] mx-[25px]">
                    <div className="flex py-[11px] lg:py-[22px] m-0">
                        <Link href="/"><img src="/logo.svg" className="mr-[48px] w-[128px] cursor-pointer"></img></Link>
                        <ul className="hidden lg:flex list-none self-center space-x-[32px]">
                            <Link href="/kategori"><li className="hover:text-[#3D87DE] py-1"><a href="#">Pembuatan Dokumen</a></li></Link>
                            <li className="hover:text-[#3D87DE] py-1"><a href="#">Tentang Kami</a></li>
                            <li className="hover:text-[#3D87DE] py-1"><a href="#">Artikel</a></li>
                        </ul>
                    </div>
                    <Menu as="div" className="relative self-center font-['Inter']">
                    {login ? 
                        <div className="flex">         
                            <img src="/Notification.svg" className="mr-[32px] cursor-pointer"></img>
                            <Menu.Button className="flex">
                                <div className="w-[40px] h-[40px] bg-black rounded-full">
                                    <img src={url_img} className="object-cover w-full"></img>
                                </div>
                                <span className="self-center ml-[8px] hidden lg:block">{nama}</span>
                            </Menu.Button>
                        </div> 
                        : 
                        <div>gak login</div>
                    }
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="z-50 w-[228px] border absolute rounded-[8px] bg-white mt-3 lg:mt-6 -right-2 lg:right-auto">
                                <div className="p-[8px] lg:p-[16px] space-y-[16px] ">
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    href="/kategori"><a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'lg:hidden block px-4 py-1 lg:py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Pembuatan Dokumen
                                    </a></Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'lg:hidden block px-4 py-1 lg:py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Tentang Kami
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'lg:hidden block px-4 py-1 lg:py-2 hover:text-blue-500 border-b'
                                    )}
                                    >
                                    Artikel
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => ( login ? 
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-1 lg:py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Profil Saya
                                    </a> : <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-1 lg:py-2 hover:text-blue-500'
                                    )}
                                    >Login</a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-1 lg:py-2 hover:text-blue-500'
                                    )}
                                    >
                                    Support
                                    </a>
                                )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                   <button
                                        type="submit"
                                        className={(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-1 lg:py-2 hover:text-blue-500'
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault() 
                                            router.push('/masuk')}}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                                </form>
                                </div>
                                </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </nav>    
        </>
        
    )
}

export default Navbar;