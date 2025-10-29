"use client";
import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "../../react-icons/ai"
import Link from 'next/link'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

const buttonClasses =  "shadow-md hover:shadow-[0_4px_6px_rgba(74,144,226,1)] transition-shadow block p-2 w-20 text-center rounded-lg border border-gray-200 text-gray-700 hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)]";

    return(
        <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className=" w-full text-4xl font-bold text-[#4A90E2]"><Link href="/">Quizz</Link></h1>
            <ul className="hidden md:flex gap-2 ">
                <li><Link href="/" className={buttonClasses}>Home</Link></li>
                <li><Link href="/perfil" className={buttonClasses}>Perfil</Link></li>
                <li><Link href="/graficos" className={buttonClasses}>Gráficos</Link></li>
                <li><Link href="/loja" className={buttonClasses}>Loja</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[var(--secondary-color)] ease-in-out duration-500" : "left-[-100%] fixed top-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-500"} >
                <h1 className=" w-full text-4xl font-bold text-[#4A90E2] m-4">Quizz</h1>
                <ul className="p-4 uppercase">
                    <li className="border-b p-4"><Link href="/">Home</Link></li>
                    <li className="border-b p-4"><Link href="/perfil">Perfil</Link></li>
                    <li className="border-b p-4"><Link href="/graficos">Gráficos</Link></li>
                    <li className="border-b p-4"><Link href="/loja"> Loja </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar