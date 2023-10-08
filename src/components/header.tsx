"use client";

import { RiMenuLine } from 'react-icons/ri';

import {motion} from 'framer-motion';

import { transition1 } from '../transitions/transition1';
import { fade } from '../variants/fade';

export default function Header() {
    return (
    <header className="flex sticky w-full h-[100px] justify-center items-center mt-4 z-50">
        <motion.nav 
        variants={fade}
        initial="variantInit"
        animate="variantAnim"
        transition={transition1}className="bg-[#1e1e1e] flex w-full max-w-[20rem] lg:max-w-max justify-center items-center h-[80px] rounded-full border-[1px] border-[#fff]">
            <ul className="flex flex-row gap-x-10 w-full justify-between items-center m-2">
                <li className="hidden lg:block"><a className="a p-[1.1rem] rounded-full transition-all duration-300 bg-[#2c2c2c]" href="#">Início</a></li>
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Sobre</a></li>
                <img src="/logo.png" className="max-w-[48px]" alt="" />
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Portfólio</a></li>
                <li className="hidden lg:block"><a className="a p-[20px] rounded-full transition-all duration-300 hover:bg-[#2c2c2c]" href="#">Contato</a></li>
                <li className='block lg:hidden'> <RiMenuLine className="text-[#fff] w-[1.5rem] h-[1.5rem] m-4" /> </li>
            </ul>
        </motion.nav>
    </header>
    )
}