"use client";

import { RiMenuLine } from 'react-icons/ri';

import {motion} from 'framer-motion';

import { transition1 } from '../transitions/transition1';
import { fade } from '../variants/fade';
import { dropdown } from '../variants/dropdown';

import {useState} from 'react'

export default function Header() {
    const [openMenu, SetOpenMenu] = useState(false)
    const handleMenu = () => {
        if(!openMenu) {
            SetOpenMenu(true)
        } else {
            SetOpenMenu(false)
        }
    }

    return (
    <header className="flex sticky w-full h-[100px] justify-center items-center z-50">
        <motion.nav 
        variants={fade}
        initial="variantInit"
        animate="variantAnim"
        transition={transition1} className="bg-[#1e1e1e] flex w-full max-w-[21rem] lg:max-w-max justify-center items-center h-[80px] rounded-full border-[1px] border-[#fff] mt-4">
            <ul className="flex flex-row gap-x-10 w-full justify-between items-center m-2">
                <li className="hidden lg:block"><a className="a p-[1.1rem] rounded-full transition-all duration-300 bg-[#2c2c2c]" href="/">Início</a></li>
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="/projects">Portfólio</a></li>
                <img src="/logo.png" className="ml-2 md:ml-0 max-w-[52px]" alt="" />
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Sobre</a></li>
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Contato</a></li>
                <li className='block lg:hidden'> <a href='#' onClick={() => handleMenu()}> <RiMenuLine  className="text-[#fff] w-[1.5rem] h-[1.5rem] m-4" /> </a> </li>
            </ul>
            <motion.div variants={dropdown} initial="variantInit" animate={openMenu ? 'variantAnim' : 'variantExit'}  className='fixed -z-[1] w-full max-w-[17rem] h-full max-h-[300px] bg-[#1e1e1e] rounded-[2.5rem]'>
                <nav className='flex flex-col h-full justify-center items-center'>
                    <ul className='flex flex-col h-full gap-y-10 items-center justify-center'>
                        <li><a className="a p-[1.1rem] rounded-full transition-all duration-300 bg-[#2c2c2c]" href="#">Início</a></li>
                        <li><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Portfólio</a></li>
                        <li><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Sobre</a></li>
                        <li><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Contato</a></li>
                    </ul>
                </nav>
            </motion.div>
        </motion.nav>
    </header>
    )
}